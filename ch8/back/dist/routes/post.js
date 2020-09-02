"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require("express");
var multer = require("multer");
var path = require("path");
var fs = require("fs");
var models_1 = require("../models");
var middleware_1 = require("./middleware");
var __1 = require("..");
var router = express.Router();
var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, done) {
            done(null, 'uploads');
        },
        filename: function (req, file, done) {
            var ext = path.extname(file.originalname);
            var basename = path.basename(file.originalname, ext);
            done(null, basename + new Date().valueOf() + ext);
        }
    }),
    limits: { fileSize: 20 * 1024 * 1024 }
});
router.post('/images', upload.array('image'), function (req, res) {
    res.json(req.files.map(function (v) { return v.filename; }));
});
router["delete"]('/:id/image/upload/:src', middleware_1.isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var filePath_1;
    return __generator(this, function (_a) {
        try {
            console.log('id=', req.params.id);
            console.log('src=', req.params.src);
            filePath_1 = path.join(__1.indexRoot, 'uploads', req.params.src);
            fs.access(filePath_1, fs.constants.F_OK, function (err) {
                if (err) {
                    console.log('삭제할 수 없는 파일입니다', filePath_1);
                    return res.status(403);
                }
                fs.unlink(filePath_1, function (err) { return err ? res.status(404).send(err) : res.status(200); });
            });
            res.send(200);
        }
        catch (e) {
            console.error(e);
            next(e);
        }
        return [2];
    });
}); });
router["delete"]('/:id/image/modify/:src', middleware_1.isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var post, filePath_2, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                console.log('id=', req.params.id);
                console.log('src=', req.params.src);
                return [4, models_1["default"].Post.findOne({ where: { id: req.params.id } })];
            case 1:
                post = _a.sent();
                if (!post) {
                    return [2, res.status(404).send('포스트가 존재하지 않습니다. ' + req.params.id)];
                }
                return [4, models_1["default"].Image.destroy({
                        where: {
                            PostId: req.params.id,
                            src: req.params.src
                        }
                    })];
            case 2:
                _a.sent();
                filePath_2 = path.join(__1.indexRoot, 'uploads', req.params.src);
                fs.access(filePath_2, fs.constants.F_OK, function (err) {
                    if (err) {
                        console.log('삭제할 수 없는 파일입니다', filePath_2);
                        return res.status(403);
                    }
                    fs.unlink(filePath_2, function (err) { return err ? res.status(404).send(err) : res.status(200); });
                });
                res.send(200);
                return [3, 4];
            case 3:
                e_1 = _a.sent();
                console.error(e_1);
                next(e_1);
                return [3, 4];
            case 4: return [2];
        }
    });
}); });
router["delete"]('/image/modify/:src', middleware_1.isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var filePath_3;
    return __generator(this, function (_a) {
        try {
            console.log('src=', req.params.src);
            console.log('indexRoot2=', __1.indexRoot);
            filePath_3 = path.join(__1.indexRoot, 'uploads', req.params.src);
            fs.access(filePath_3, fs.constants.F_OK, function (err) {
                if (err) {
                    return console.log('삭제할 수 없는 파일입니다', filePath_3);
                }
                fs.unlink(filePath_3, function (err) { return err ? res.status(404).send(err) : res.status(200); });
            });
            res.send(200);
        }
        catch (e) {
            console.error(e);
            next(e);
        }
        return [2];
    });
}); });
router.get('/:id/images', middleware_1.isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var post, images, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, models_1["default"].Post.findOne({ where: { id: req.params.id } })];
            case 1:
                post = _a.sent();
                if (!post) {
                    return [2, res.status(404).send('포스트가 존재하지 않습니다. ' + req.params.id)];
                }
                return [4, models_1["default"].Image.findAll({
                        where: { postId: req.params.id },
                        attributes: ['src']
                    })];
            case 2:
                images = _a.sent();
                res.json(images.map(function (v) { return v.src; }));
                return [3, 4];
            case 3:
                e_2 = _a.sent();
                console.error(e_2);
                next(e_2);
                return [3, 4];
            case 4: return [2];
        }
    });
}); });
router.patch('/', middleware_1.isLoggedIn, upload.none(), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var post, hashtags, promises, result, images, fullPost, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('게시글 업데이트 해보자');
                console.log('userId = ', req.user.id);
                console.log('postId = ', req.body.postId);
                console.log('content = ', req.body.content);
                console.log('image = ', req.body.image);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 11, , 12]);
                return [4, models_1["default"].Post.findOne({ where: { id: req.body.postId } })];
            case 2:
                post = _a.sent();
                if (!post) {
                    return [2, res.status(404).send('포스트가 존재하지 않습니다. ' + req.body.postId)];
                }
                return [4, models_1["default"].Post.update({
                        content: req.body.content
                    }, {
                        where: { id: Number(req.body.postId) }
                    })];
            case 3:
                _a.sent();
                hashtags = req.body.content.match(/#[^\s]+/g);
                if (!hashtags) return [3, 6];
                promises = hashtags.map(function (tag) { return models_1["default"].Hashtag.findOrCreate({
                    where: { name: tag.slice(1).toLowerCase() }
                }); });
                return [4, Promise.all(promises)];
            case 4:
                result = _a.sent();
                return [4, post.setHashtags(result.map(function (r) { return r[0]; }))];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                if (!req.body.image) return [3, 9];
                if (typeof (req.body.image) !== 'object') {
                    req.body.image = [req.body.image];
                }
                return [4, Promise.all(req.body.image.map(function (v) {
                        return models_1["default"].Image.create({ src: v });
                    }))];
            case 7:
                images = _a.sent();
                return [4, post.setImages(images)];
            case 8:
                _a.sent();
                _a.label = 9;
            case 9: return [4, models_1["default"].Post.findOne({
                    where: { id: post.id },
                    include: [{
                            model: models_1["default"].User
                        }, {
                            model: models_1["default"].Image
                        }]
                })];
            case 10:
                fullPost = _a.sent();
                res.json(fullPost);
                return [3, 12];
            case 11:
                e_3 = _a.sent();
                console.error(e_3);
                next(e_3);
                return [3, 12];
            case 12: return [2];
        }
    });
}); });
router.post('/', middleware_1.isLoggedIn, upload.none(), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var hashtags, newPost, promises, result, images, fullPost, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 9, , 10]);
                hashtags = req.body.content.match(/#[^\s]+/g);
                return [4, models_1["default"].Post.create({
                        content: req.body.content,
                        UserId: req.user.id
                    })];
            case 1:
                newPost = _a.sent();
                if (!hashtags) return [3, 4];
                promises = hashtags.map(function (tag) { return models_1["default"].Hashtag.findOrCreate({
                    where: { name: tag.slice(1).toLowerCase() }
                }); });
                return [4, Promise.all(promises)];
            case 2:
                result = _a.sent();
                return [4, newPost.addHashtags(result.map(function (r) { return r[0]; }))];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                if (!req.body.image) return [3, 7];
                if (typeof (req.body.image) !== 'object') {
                    req.body.image = [req.body.image];
                }
                return [4, Promise.all(req.body.image.map(function (v) {
                        return models_1["default"].Image.create({ src: v });
                    }))];
            case 5:
                images = _a.sent();
                return [4, newPost.addImages(images)];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [4, models_1["default"].Post.findOne({
                    where: { id: newPost.id },
                    include: [{
                            model: models_1["default"].User
                        }, {
                            model: models_1["default"].Image
                        }]
                })];
            case 8:
                fullPost = _a.sent();
                res.json(fullPost);
                return [3, 10];
            case 9:
                e_4 = _a.sent();
                console.error(e_4);
                next(e_4);
                return [3, 10];
            case 10: return [2];
        }
    });
}); });
router["delete"]('/:id', middleware_1.isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var post, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, models_1["default"].Post.findOne({ where: { id: req.params.id } })];
            case 1:
                post = _a.sent();
                if (!post) {
                    return [2, res.status(404).send('포스트가 존재하지 않습니다. ' + req.params.id)];
                }
                return [4, post.destroy()];
            case 2:
                _a.sent();
                res.json({ postId: parseInt(req.params.id) });
                return [3, 4];
            case 3:
                e_5 = _a.sent();
                console.error(e_5);
                next(e_5);
                return [3, 4];
            case 4: return [2];
        }
    });
}); });
router.post('/:id/like', middleware_1.isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var post, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, models_1["default"].Post.findOne({ where: { id: req.params.id } })];
            case 1:
                post = _a.sent();
                if (!post) {
                    return [2, res.status(404).send('포스트가 존재하지 않습니다. ' + req.params.id)];
                }
                return [4, post.addLiker(req.user.id)];
            case 2:
                _a.sent();
                res.json({ userId: req.user.id });
                return [3, 4];
            case 3:
                e_6 = _a.sent();
                console.error(e_6);
                next(e_6);
                return [3, 4];
            case 4: return [2];
        }
    });
}); });
router["delete"]('/:id/like', middleware_1.isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var post, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, models_1["default"].Post.findOne({ where: { id: req.params.id } })];
            case 1:
                post = _a.sent();
                if (!post) {
                    return [2, res.status(404).send('포스트가 존재하지 않습니다. ' + req.params.id)];
                }
                return [4, post.removeLiker(req.user.id)];
            case 2:
                _a.sent();
                res.json({ userId: req.user.id });
                return [3, 4];
            case 3:
                e_7 = _a.sent();
                console.error(e_7);
                next(e_7);
                return [3, 4];
            case 4: return [2];
        }
    });
}); });
router.post('/:id/comment', middleware_1.isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var post, newComment, comment, e_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4, models_1["default"].Post.findOne({ where: { id: req.params.id } })];
            case 1:
                post = _a.sent();
                if (!post) {
                    res.status(404).send('포스트가 존재하지 않습니다.');
                }
                return [4, models_1["default"].Comment.create({
                        UserId: req.user.id,
                        PostId: post.id,
                        content: req.body.content
                    })];
            case 2:
                newComment = _a.sent();
                return [4, post.addComment(newComment.id)];
            case 3:
                _a.sent();
                return [4, models_1["default"].Comment.findOne({
                        where: { id: newComment.id },
                        include: [{
                                model: models_1["default"].User,
                                attributes: ['userId', 'nickname']
                            },]
                    })];
            case 4:
                comment = _a.sent();
                res.json(comment);
                return [3, 6];
            case 5:
                e_8 = _a.sent();
                console.error(e_8);
                next(e_8);
                return [3, 6];
            case 6: return [2];
        }
    });
}); });
router.get('/:id/comments', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var post, comments, e_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, models_1["default"].Post.findOne({ where: { id: req.params.id } })];
            case 1:
                post = _a.sent();
                if (!post) {
                    res.status(404).send('포스트가 존재하지 않습니다.');
                }
                return [4, models_1["default"].Comment.findAll({
                        where: {
                            PostId: req.params.id
                        },
                        order: [['createdAt', 'ASC']],
                        include: [{
                                model: models_1["default"].User,
                                attributes: ['id', 'nickname']
                            }]
                    })];
            case 2:
                comments = _a.sent();
                res.json(comments);
                return [3, 4];
            case 3:
                e_9 = _a.sent();
                console.error(e_9);
                next(e_9);
                return [3, 4];
            case 4: return [2];
        }
    });
}); });
router.post('/:id/retweet', middleware_1.isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var post, retweetTargetId, exPost, retweet, retweetWithPrevPost, e_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4, models_1["default"].Post.findOne({
                        where: { id: req.params.id },
                        include: [{
                                model: models_1["default"].Post,
                                as: 'Retweet'
                            }]
                    })];
            case 1:
                post = _a.sent();
                if (!post) {
                    return [2, res.status(404).send('포스트가 존재하지 않습니다.')];
                }
                if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
                    return [2, res.status(403).send('자신의 글은 리트윗할 수 없습니다.')];
                }
                retweetTargetId = post.RetweetId || post.id;
                return [4, models_1["default"].Post.findOne({
                        where: {
                            UserId: req.user.id,
                            RetweetId: retweetTargetId
                        }
                    })];
            case 2:
                exPost = _a.sent();
                if (exPost) {
                    return [2, res.status(403).send('이미 리트윗했습니다.')];
                }
                return [4, models_1["default"].Post.create({
                        UserId: req.user.id,
                        RetweetId: retweetTargetId,
                        content: 'retweet'
                    })];
            case 3:
                retweet = _a.sent();
                return [4, models_1["default"].Post.findOne({
                        where: { id: retweet.id },
                        include: [{
                                model: models_1["default"].User,
                                attributes: ['id', 'nickname']
                            }, {
                                model: models_1["default"].Post,
                                as: 'Retweet',
                                include: [{
                                        model: models_1["default"].User,
                                        attributes: ['id', 'nickname']
                                    }, {
                                        model: models_1["default"].Image
                                    }]
                            }]
                    })];
            case 4:
                retweetWithPrevPost = _a.sent();
                res.json(retweetWithPrevPost);
                return [3, 6];
            case 5:
                e_10 = _a.sent();
                console.error(e_10);
                next(e_10);
                return [3, 6];
            case 6: return [2];
        }
    });
}); });
router.get('/:id', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var post, e_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, models_1["default"].Post.findOne({
                        where: { id: req.params.id },
                        include: [{
                                model: models_1["default"].User,
                                attributes: ['id', 'nickname']
                            }, {
                                model: models_1["default"].Image
                            }]
                    })];
            case 1:
                post = _a.sent();
                if (!post) {
                    res.status(405).send('포스트가 존재하지 않습니다.');
                }
                res.json(post);
                return [3, 3];
            case 2:
                e_11 = _a.sent();
                console.error(e_11);
                next(e_11);
                return [3, 3];
            case 3: return [2];
        }
    });
}); });
exports["default"] = router;
