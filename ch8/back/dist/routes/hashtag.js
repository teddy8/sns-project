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
router.get('/:tag', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const posts = yield db.Post.findAll({
            include: [{
                    model: db.Hashtag,
                    where: { name: decodeURIComponent(req.params.tag) },
                }, {
                    model: db.User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: db.User,
                    through: 'Like',
                    as: 'Likers',
                    attributes: ['id'],
                }, {
                    model: db.Image,
                }],
        });
        res.json(posts);
    }
    catch (e) {
        console.error(e);
        next(e);
    }
}));
module.exports = router;
//# sourceMappingURL=hashtag.js.map