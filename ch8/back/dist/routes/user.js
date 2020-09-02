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
var Sequelize = require("sequelize");
var bcrypt = require("bcrypt");
var passport = require("passport");
var models_1 = require("../models");
var isLoggedIn = require('./middleware').isLoggedIn;
var router = express.Router();
router.get('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var fullUserWithoutPassword, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                if (!req.user) return [3, 2];
                return [4, models_1["default"].User.findOne({
                        where: { id: req.user.id },
                        attributes: {
                            exclude: ['password']
                        },
                        include: [{
                                model: models_1["default"].Post,
                                as: 'Posts',
                                attributes: ['id']
                            }, {
                                model: models_1["default"].User,
                                as: 'Followings',
                                attributes: ['id']
                            }, {
                                model: models_1["default"].User,
                                as: 'Followers',
                                attributes: ['id']
                            }]
                    })];
            case 1:
                fullUserWithoutPassword = _a.sent();
                res.status(200).json(fullUserWithoutPassword);
                return [3, 3];
            case 2:
                res.status(200).json(null);
                _a.label = 3;
            case 3: return [3, 5];
            case 4:
                error_1 = _a.sent();
                console.error(error_1);
                next(error_1);
                return [3, 5];
            case 5: return [2];
        }
    });
}); });
router.post('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var exUser, hashedPassword, newUser, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4, models_1["default"].User.findOne({
                        where: {
                            userId: req.body.userId
                        }
                    })];
            case 1:
                exUser = _a.sent();
                if (exUser) {
                    return [2, res.status(403).send('이미 사용중인 아이디입니다..')];
                }
                return [4, bcrypt.hash(req.body.password, 12)];
            case 2:
                hashedPassword = _a.sent();
                return [4, models_1["default"].User.create({
                        nickname: req.body.nickname,
                        userId: req.body.userId,
                        password: hashedPassword
                    })];
            case 3:
                newUser = _a.sent();
                return [2, res.status(200).json(newUser)];
            case 4:
                e_1 = _a.sent();
                console.error(e_1);
                return [2, next(e_1)];
            case 5: return [2];
        }
    });
}); });
router.get('/followings', isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, followings, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('팔로잉 정보 요청');
                console.log('offset = ', req.query.offset);
                console.log('limit = ', req.query.limit);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4, models_1["default"].User.findOne({
                        where: { id: req.user.id }
                    })];
            case 2:
                user = _a.sent();
                if (!user) {
                    return [2, res.status(403).send('아이디가 존재하지 않습니다.')];
                }
                return [4, user.getFollowings({
                        attributes: ['id', 'nickname'],
                        offset: Number(req.query.offset),
                        limit: Number(req.query.limit)
                    })];
            case 3:
                followings = _a.sent();
                res.send(followings);
                return [3, 5];
            case 4:
                e_2 = _a.sent();
                console.error(e_2);
                next(e_2);
                return [3, 5];
            case 5: return [2];
        }
    });
}); });
router.get('/followers', isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, followers, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, models_1["default"].User.findOne({
                        where: { id: req.user.id }
                    })];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2, res.status(403).send('아이디가 존재하지 않습니다.')];
                }
                return [4, user.getFollowers({
                        attributes: ['id', 'nickname'],
                        offset: Number(req.query.offset),
                        limit: Number(req.query.limit)
                    })];
            case 2:
                followers = _a.sent();
                res.send(followers);
                return [3, 4];
            case 3:
                e_3 = _a.sent();
                console.error(e_3);
                next(e_3);
                return [3, 4];
            case 4: return [2];
        }
    });
}); });
router.post('/logout', function (req, res) {
    req.logout();
    if (req.session) {
        req.session.destroy(function (err) {
            res.send('logout 성공1');
        });
    }
    else {
        res.send('logout 성공2');
    }
});
router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            console.log('11');
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.message);
        }
        return req.login(user, function (loginErr) { return __awaiter(void 0, void 0, void 0, function () {
            var fullUser, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (loginErr) {
                            console.log('로그인 에러');
                            return [2, next(loginErr)];
                        }
                        return [4, models_1["default"].User.findOne({
                                where: { id: user.id },
                                include: [
                                    {
                                        model: models_1["default"].Post,
                                        as: 'Posts',
                                        attributes: ['id']
                                    },
                                    {
                                        model: models_1["default"].User,
                                        as: 'Followings',
                                        attributes: ['id']
                                    },
                                    {
                                        model: models_1["default"].User,
                                        as: 'Followers',
                                        attributes: ['id']
                                    },
                                ],
                                attributes: ['id', 'nickname', 'userId']
                            })];
                    case 1:
                        fullUser = _a.sent();
                        return [2, res.json(fullUser)];
                    case 2:
                        e_4 = _a.sent();
                        console.error(e_4);
                        return [2, next(e_4)];
                    case 3: return [2];
                }
            });
        }); });
    })(req, res, next);
});
router.post('/:id/follow', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var me, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, models_1["default"].User.findOne({
                        where: { id: req.user.id }
                    })];
            case 1:
                me = _a.sent();
                if (!me) {
                    return [2, res.status(403).send('아이디가 존재하지 않습니다.')];
                }
                return [4, me.addFollowing(parseInt(req.params.id))];
            case 2:
                _a.sent();
                res.send(req.params.id);
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
router["delete"]('/:id/follow', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var me, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, models_1["default"].User.findOne({
                        where: { id: req.user.id }
                    })];
            case 1:
                me = _a.sent();
                if (!me) {
                    return [2, res.status(403).send('아이디가 존재하지 않습니다.')];
                }
                return [4, me.removeFollowing(parseInt(req.params.id))];
            case 2:
                _a.sent();
                res.send(req.params.id);
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
router["delete"]('/:id/follower', isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var me, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, models_1["default"].User.findOne({
                        where: { id: req.user.id }
                    })];
            case 1:
                me = _a.sent();
                if (!me) {
                    return [2, res.status(403).send('아이디가 존재하지 않습니다.')];
                }
                return [4, me.removeFollower(parseInt(req.params.id))];
            case 2:
                _a.sent();
                res.send(req.params.id);
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
router["delete"]('/:id/following', function (req, res) {
});
router.get('/:id/posts', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var posts, e_8;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                return [4, models_1["default"].Post.findAll({
                        limit: Number(req.query.limit),
                        where: {
                            id: Number(req.query.lastId) ? (_a = {}, _a[Sequelize.Op.lt] = Number(req.query.lastId), _a) : (_b = {}, _b[Sequelize.Op.ne] = null, _b),
                            UserId: Number(req.params.id),
                            RetweetId: null
                        },
                        include: [{
                                model: models_1["default"].User,
                                attributes: ['id', 'nickname']
                            }, {
                                model: models_1["default"].Image
                            }, {
                                model: models_1["default"].User,
                                as: 'Likers',
                                attributes: ['id']
                            }],
                        order: [["createdAt", "DESC"]]
                    })];
            case 1:
                posts = _c.sent();
                res.json(posts);
                return [3, 3];
            case 2:
                e_8 = _c.sent();
                console.error(e_8);
                next(e_8);
                return [3, 3];
            case 3: return [2];
        }
    });
}); });
router.patch('/nickname', isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var me, e_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, models_1["default"].User.findOne({
                        where: { id: req.user.id }
                    })];
            case 1:
                me = _a.sent();
                if (!me) {
                    return [2, res.status(403).send('아이디가 존재하지 않습니다.')];
                }
                return [4, models_1["default"].User.update({
                        nickname: req.body.nickname
                    }, {
                        where: { id: me.id }
                    })];
            case 2:
                _a.sent();
                res.send(req.body.nickname);
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
router.get('/:id', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, jsonUser, e_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('남의 정보 요청');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, models_1["default"].User.findOne({
                        where: { userId: req.params.id },
                        include: [{
                                model: models_1["default"].Post,
                                as: 'Posts',
                                attributes: ['id']
                            }, {
                                model: models_1["default"].User,
                                as: 'Followings',
                                attributes: ['id']
                            }, {
                                model: models_1["default"].User,
                                as: 'Followers',
                                attributes: ['id']
                            }],
                        attributes: ['id', 'nickname']
                    })];
            case 2:
                user = _a.sent();
                jsonUser = user.toJSON();
                jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0;
                jsonUser.Followings = jsonUser.Followings ? jsonUser.Followings.length : 0;
                jsonUser.Followers = jsonUser.Followers ? jsonUser.Followers.length : 0;
                return [2, res.json(jsonUser)];
            case 3:
                e_10 = _a.sent();
                console.error(e_10);
                next(e_10);
                return [3, 4];
            case 4: return [2];
        }
    });
}); });
exports["default"] = router;
