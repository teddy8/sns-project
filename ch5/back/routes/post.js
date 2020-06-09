const express = require('express');
const db = require('../models')
const router = express.Router();

router.post('/', async (req, res) => {
    console.log('req id = ' + req.user.id);
    
    const newPost = await db.Post.create({
        content: req.body.content, // ex) '제로초 파이팅 #구독 #좋아요 눌러주세요'
        UserId: req.user.id,
      });

    // console.log('newPost1 = ' + JSON.stringify(newPost));
    // console.log('newPost id = ' + newPost.id);
    // 그냥 추가한 포스트에 현재 유저 포함해서 뱉는거
    const fullPost = await db.Post.findOne({
        where: { id: newPost.id },
        include: [{
          model: db.User,
        }],
      });

    // console.log('newPost2 = ' + JSON.stringify(fullPost));
    // res.send('백엔드 응답 = ' + req.body.content)
    // res.send('백엔드 응답 = ' + req.body.content)
    res.json(fullPost);
})

router.post('/images', (req, res) => {

})
module.exports = router;