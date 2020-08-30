var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const db = require('../models');
const router = express.Router();
router.get('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try { // 포스트테이블의 모든 데이터를 가져오는데 유저정보도 (고유키는 id, nickname)
        const posts = yield db.Post.findAll({
            include: [{
                    model: db.User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: db.Image,
                }, {
                    model: db.User,
                    through: 'Like',
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
            order: [['createdAt', 'DESC'],]
        });
        res.json(posts);
    }
    catch (e) {
        console.error(e);
        next(e);
    }
}));
module.exports = router;
//# sourceMappingURL=posts.js.map