import * as express from 'express'
// const db = require('../models')
import db from '../models'
const router = express.Router()

router.get('/:tag', async (req, res, next) => {
    try {
        const posts = await db.Post.findAll({
            include: [{
                model: db.Hashtag,
                where: { name: decodeURIComponent(req.params.tag) }, // 한글이나 특수문자는 decode해줘야함
            }, {
                model: db.User,
                attributes: ['id', 'nickname'],
            }, {
                model: db.User,
                // through: 'Like',
                as: 'Likers',
                attributes: ['id'],
            }, {
                model: db.Image,
            }],
            limit: Number(req.query.limit),
            offset: Number(req.query.offset),
        });

        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
})

export default router