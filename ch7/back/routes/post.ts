import * as express from 'express'
import * as multer from 'multer'
import * as path from 'path'
import db from '../models'
import { isLoggedIn } from './middleware'
import Hashtag from '../models/hashtag'
import * as Bluebird from 'bluebird'

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({ // 지금은 diskStorage에 저장하는 것 나중에 s3도 해보겠다
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + new Date().valueOf() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 } // 파일사이즈 제한 가능. byte단위. 이건 20mb. 이게 너무 크면 해커의 공격가능성 서버에 무리를 줄 수 있기 때문. 파일 개수도 제한할 수 있다 multer의 옵션을 살펴볼 것.
})
// 이미지 리사이징도 여기서 처리하면 됨
router.post('/images', upload.array('image'), (req, res) => { // 이미지를 여러개 올릴 수 있기 때문에 array라는 미들웨어를 써야한다.(1장만 올릴 수 있으면 single) 안에 들어가는 인자는 프론트의 Form데이터에서 append하는 이름과 일치해야한다.(이미지 여러개면서 프론트에서 append한 이름이 각각 다르다면 upload.fields([{'image}, {'img'}])로 해야함). 이미지나 파일같은것을 하나도 안올렸을 때는 upload.none()
  // console.log(req.files);
  res.json((req.files as Express.Multer.File[]).map(v => v.filename)); // 파일정보는 req에 담겨있다. (1개면 req.file에 들어있음)
});

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const hashtags = req.body.content.match(/#[^\s]+/g);
    const newPost = await db.Post.create({
      content: req.body.content, // ex) '제로초 파이팅 #구독 #좋아요 눌러주세요'
      UserId: req.user!.id,
    });

    if (hashtags) { // 해쉬태그를 하나하나 레코드 삽입 (찾았을 때 없을 경우 . # 빼고  소문자로)
      const promises = hashtags.map((tag: string) => db.Hashtag.findOrCreate({
        where: { name: tag.slice(1).toLowerCase() },
      }));
      const result: any = await Promise.all(promises)
      // console.log('result = ', result);
      // result.map((r: any, i: number) => {
      //   console.log('i=', i, r[0]);
      // })
      // console.log('result complete');
      await newPost.addHashtags(result.map((r: any) => r[0]));
    }

    if (req.body.image) { // 이미지를 올렸는데
      if (typeof (req.body.image) !== 'object') { //  한장이든 여러장이든 map으로 처리하려고 오브젝트 아니면 배열로 만들어줌'
        req.body.image = [req.body.image]
      }

      const images: any = await Promise.all(req.body.image.map((v: string) => {
        return db.Image.create({ src: v });
      }))
      await newPost.addImages(images);
    }

    // 추가한 포스트에 현재 유저 포함해서 뱉는거. 이미지도 불러와서 보내줌
    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [{
        model: db.User,
      }, {
        model: db.Image,
      }],
    });

    res.json(fullPost);
  } catch (e) {
    console.error(e);
    next(e)
  }
})

router.post('/:id/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id } })
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다. ' + req.params.id);
    }
    await post.addLiker(parseInt(req.user!.id))
    res.json({ userId: req.user!.id })
  } catch (e) {
    console.error(e);
    next(e)
  }
})

router.delete('/:id/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id } })
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다. ' + req.params.id);
    }
    await post.removeLiker(parseInt(req.user!.id))
    res.json({ userId: req.user!.id })
  } catch (e) {
    console.error(e);
    next(e)
  }
})

router.post('/:id/comment', isLoggedIn, async (req, res, next) => {
  try {
    // 해당 포스트가 없을 경우 처리 (댓글작성 중에 사라졌을 수도 있으니까)
    const post = await db.Post.findOne({ where: { id: req.params.id } })
    if (!post) { res.status(404).send('포스트가 존재하지 않습니다.') }

    // 누가 어떤포스트에 무슨 내용을 썼는지 db에 기록
    const newComment = await db.Comment.create({
      UserId: req.user!.id,
      PostId: post!.id,
      content: req.body.content,
    })

    await post!.addComment(newComment.id); // 포스트테이블 댓글테이블 join
    const comment = await db.Comment.findOne({
      where: { id: newComment.id },
      include: [{
        model: db.User,
        attributes: ['userId', 'nickname']
      },]
    })

    // console.log('comment = ' + JSON.stringify(comment));    
    res.json(comment)
  } catch (e) {
    console.error(e);
    next(e)
  }
})

router.get('/:id/comments', async (req, res, next) => {
  try {
    // 해당 포스트가 없을 경우 처리 (댓글작성 중에 사라졌을 수도 있으니까)
    const post = await db.Post.findOne({ where: { id: req.params.id } })
    if (!post) { res.status(404).send('포스트가 존재하지 않습니다.') }

    // 누가 어떤포스트에 무슨 내용을 썼는지 db에 기록
    const comments = await db.Comment.findAll({
      where: {
        PostId: req.params.id
      },
      order: [['createdAt', 'ASC']],
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }],
    })

    // console.log('postId ' + req.params.id + '로 찾은 것 = ' + JSON.stringify(comments));
    res.json(comments);
  } catch (e) {
    console.error(e);
    next(e)
  }
})

/* 
  1. 포스트 존재하는지 확인하고
  2. 자기 자신의 글을 리트윗하는건지 확인하고 (현재 로그인한 유저아이디와 해당게시글의 작성자가 일치하는지)
  3. 이미 리트윗한 글인지 확인
*/
router.post('/:id/retweet', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({
      where: { id: req.params.id },
      include: [{
        model: db.Post,
        as: 'Retweet',
      }],
    });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    if (parseInt(req.user!.id) === post.UserId || (post.Retweet && post.Retweet.UserId === parseInt(req.user!.id))) {
      return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
    }
    const retweetTargetId = post.RetweetId || post.id;
    const exPost = await db.Post.findOne({
      where: {
        UserId: req.user!.id,
        RetweetId: retweetTargetId,
      },
    });
    if (exPost) {
      return res.status(403).send('이미 리트윗했습니다.');
    }
    /* posts */
    const retweet = await db.Post.create({
      UserId: req.user!.id,
      RetweetId: retweetTargetId,
      content: 'retweet',
    });
    /* posts테이블에 추가한 리트윗 게시물 정보와 현재로그인유저 정보, 이미지를 포함해서 던져준다 */
    const retweetWithPrevPost = await db.Post.findOne({
      where: { id: retweet.id },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Post,
        as: 'Retweet',
        include: [{
          model: db.User,
          attributes: ['id', 'nickname'],
        }, {
          model: db.Image,
        }],
      }],
    });
    // console.log('output = ', retweetWithPrevPost);

    res.json(retweetWithPrevPost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

export default router;