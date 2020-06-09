const express = require('express');
const db = require('../models')
const router = express.Router();

router.get('/', async (req, res, next) => {
    try { // 포스트테이블의 모든 데이터를 가져오는데 유저정보도 (고유키는 id, nickname)
        const posts = await db.Post.findAll({
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }],
            order: [['createdAt', 'DESC'],]
        })
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e)
    }
})

module.exports = router;

