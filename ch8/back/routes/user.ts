import * as express from 'express'
import * as Sequelize from 'sequelize'
import * as bcrypt from 'bcrypt';
import * as passport from 'passport'
import db from '../models';
import { User, IUser } from '../models/user';
import { parse } from 'path';

const { isLoggedIn } = require('./middleware')
const router = express.Router();

router.get('/', async (req, res, next) => { // GET /user
    try {
        if (req.user) {
            const fullUserWithoutPassword = await db.User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: db.Post,
                    as: 'Posts',
                    attributes: ['id'],
                }, {
                    model: db.User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: db.User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/', async (req, res, next) => { // 회원가입 (내 정보 등록)
    try {
        const exUser = await db.User.findOne({
            where: {
                userId: req.body.userId,
            },
        });

        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다..')
            // return res.send('이미 사용중인 아이디입니다.!')
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12); // 비밀번호 암호화 숫자가 클 수록 해킹어려운데 보통은 10~13. 
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword,
        })

        // console.log(newUser);
        return res.status(200).json(newUser);
    } catch (e) {
        console.error(e);
        // return res.status(403).send(e);
        return next(e); // 에러처리는 위에서 해줘야함
    }
})

// router.get('/:id/followings', isLoggedIn, async (req, res, next) => { // 해당 유저 팔로우 목록 가져오기
router.get('/followings', isLoggedIn, async (req, res, next) => { // 해당 유저 팔로우 목록 가져오기
    // console.log('id = ', req.params.id); // console.log('id = ', req.params.id);

    console.log('팔로잉 정보 요청');
    console.log('offset = ', req.query.offset);
    console.log('limit = ', req.query.limit);

    try {
        const user = await db.User.findOne({
            where: { id: req.user!.id }
        })
        if (!user) {
            return res.status(403).send('아이디가 존재하지 않습니다.')
        }
        const followings = await user.getFollowings({
            attributes: ['id', 'nickname'],
            offset: Number(req.query.offset),
            limit: Number(req.query.limit),
        });
        res.send(followings)
    } catch (e) {
        console.error(e);
        next(e)
    }
})

router.get('/followers', isLoggedIn, async (req, res, next) => { // 해당 유저 팔로우 목록 가져오기
    try {
        const user = await db.User.findOne({
            where: { id: req.user!.id }
        })
        if (!user) {
            return res.status(403).send('아이디가 존재하지 않습니다.')
        }
        const followers = await user.getFollowers({
            attributes: ['id', 'nickname'],
            offset: Number(req.query.offset),
            limit: Number(req.query.limit),
        });
        res.send(followers)
    } catch (e) {
        console.error(e);
        next(e)
    }
})

router.post('/logout', (req, res) => { // 로그아웃
    req.logout();
    if (req.session) {
        req.session!.destroy((err) => {
            res.send('logout 성공1');
        });
    } else {
        res.send('logout 성공2');
    }
})

router.post('/login', (req, res, next) => { // 로그인  /api/user/login
    // kakao로그인이면 kakao, google이면 google
    passport.authenticate('local', (err: any, user: any, info: any) => {  // done( , , )
        if (err) { // 서버 에러
            console.log('11');
            console.error(err);
            return next(err);
        }
        if (info) { // 로직상의 에러
            return res.status(401).send(info.message);
        }
        return req.login(user, async (loginErr) => {
            try {
                if (loginErr) {
                    console.log('로그인 에러');
                    return next(loginErr);
                }

                const fullUser = await db.User.findOne({
                    where: { id: user.id },
                    include: [
                        {
                            model: db.Post,
                            as: 'Posts',
                            attributes: ['id'],
                        },
                        {
                            model: db.User,
                            as: 'Followings',
                            attributes: ['id'],
                        },
                        {
                            model: db.User,
                            as: 'Followers',
                            attributes: ['id'],
                        },
                    ],
                    attributes: ['id', 'nickname', 'userId']
                })
                // console.log('fulluser = ' + JSON.stringify(fullUser));
                return res.json(fullUser);
            } catch (e) {
                console.error(e);
                return next(e)
            }
        })
    })(req, res, next)
})

router.post('/:id/follow', async (req, res, next) => { // 해당 유저 팔로우 등록하기
    try {
        const me = await db.User.findOne({
            where: { id: req.user!.id }
        })
        if (!me) {
            return res.status(403).send('아이디가 존재하지 않습니다.')
        }
        await me.addFollowing(parseInt(req.params.id))
        res.send(req.params.id)
    } catch (e) {
        console.error(e);
        next(e)
    }
})

router.delete('/:id/follow', async (req, res, next) => { // 해당 유저 팔로우 취소하기
    try {
        const me = await db.User.findOne({
            where: { id: req.user!.id }
        })
        if (!me) {
            return res.status(403).send('아이디가 존재하지 않습니다.')
        }
        await me.removeFollowing(parseInt(req.params.id))
        res.send(req.params.id)
    } catch (e) {
        console.error(e);
        next(e)
    }
})

router.delete('/:id/follower', isLoggedIn, async (req, res, next) => { // 팔로워 삭제 (나를 따르고 있는 사람)
    try {
        const me = await db.User.findOne({
            where: { id: req.user!.id }
        })
        if (!me) {
            return res.status(403).send('아이디가 존재하지 않습니다.')
        }
        await me.removeFollower(parseInt(req.params.id))
        res.send(req.params.id);
    } catch (e) {
        console.error(e);
        next(e)
    }
})

router.delete('/:id/following', (req, res) => { // 팔로잉 삭제 (내가 따르고 있는 사람 취소)

})

router.get('/:id/posts', async (req, res, next) => { // 특정유저의 모든 게시글 가져오기
    try {
        const posts = await db.Post.findAll({
            limit: Number(req.query.limit),
            where: {
                id: Number(req.query.lastId) ? { [Sequelize.Op.lt]: Number(req.query.lastId) } : { [Sequelize.Op.ne]: null },
                UserId: Number(req.params.id),
                RetweetId: null,
            },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }, {
                model: db.Image,
            }, {
                model: db.User,
                as: 'Likers',
                attributes: ['id'],
            }],
            order: [["createdAt", "DESC"]],
        })

        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e)
    }
})

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
    try {
        const me = await db.User.findOne({
            where: { id: req.user!.id }
        })
        if (!me) {
            return res.status(403).send('아이디가 존재하지 않습니다.')
        }
        await db.User.update({
            nickname: req.body.nickname
        }, {
            where: { id: me.id }
        })
        res.send(req.body.nickname)
    } catch (e) {
        console.error(e);
        next(e)
    }
})

router.get('/:id', async (req, res, next) => { // 남의 정보 가져오는거
    console.log('남의 정보 요청');
    try {
        const user = await db.User.findOne({ // 지금데이터는 없지만 게시글수, 팔로잉, 팔로워 껴서 넣어준다.
            where: { userId: req.params.id },
            include: [{
                model: db.Post,
                as: 'Posts',
                attributes: ['id'],
            }, {
                model: db.User,
                as: 'Followings',
                attributes: ['id'],
            }, {
                model: db.User,
                as: 'Followers',
                attributes: ['id'],
            }],
            attributes: ['id', 'nickname']
        })
        // const jsonUser = user!.toJSON() as UserI;

        const jsonUser: any = user!.toJSON()

        jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0;
        jsonUser.Followings = jsonUser.Followings ? jsonUser.Followings.length : 0;
        jsonUser.Followers = jsonUser.Followers ? jsonUser.Followers.length : 0;
        return res.json(jsonUser)
    } catch (e) {
        console.error(e);
        next(e)
    }
})

export default router;