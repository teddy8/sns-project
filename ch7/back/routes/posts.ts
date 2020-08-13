import * as express from 'express';
import * as Sequelize from 'sequelize'
import db from '../models';


const router = express.Router();

router.get('/', async (req, res, next) => {
    console.log('limit=', req.query.limit);
    console.log('offset=', req.query.offset);

    try { // 포스트테이블의 모든 데이터를 가져오는데 유저정보도 (고유키는 id, nickname)
        const posts = await db.Post.findAll({
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }, {
                model: db.Image, // 포스트테이블의 id와 이미지테이블의 id가 일치하는 게 있으면 그걸 포함해서 뱉어줌
            }, {
                model: db.User,
                as: 'Likers',
                attributes: ['id'],
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
            order: [['createdAt', 'DESC'],],
            limit: Number(req.query.limit),
            // offset: Number(req.query.offset),
            where: Number(req.query.lastId) ? { id: { [Sequelize.Op.lt]: Number(req.query.lastId) } } : {},

        })

        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e)
    }
})

// module.exports = router;
export default router;
