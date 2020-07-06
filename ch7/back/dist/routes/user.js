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
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../models');
const passport = require('passport');
const { isLoggedIn } = require('./middleware');
router.get('/', isLoggedIn, (req, res) => {
    // console.log('내 정보 요청');
    const user = Object.assign({}, req.user.toJSON());
    delete user.password;
    return res.json(user);
});
router.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const exUser = yield db.User.findOne({
            where: {
                userId: req.body.userId,
            },
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다..');
            // return res.send('이미 사용중인 아이디입니다.!')
        }
        const hashedPassword = yield bcrypt.hash(req.body.password, 12); // 비밀번호 암호화 숫자가 클 수록 해킹어려운데 보통은 10~13. 
        const newUser = yield db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword,
        });
        // console.log(newUser);
        return res.status(200).json(newUser);
    }
    catch (e) {
        console.error(e);
        // return res.status(403).send(e);
        return next(e); // 에러처리는 위에서 해줘야함
    }
}));
router.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    // console.log('남의 정보 요청');   
    try {
        const user = yield db.User.findOne({
            attributes: ['id', 'nickname'],
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
        });
        const jsonUser = user.toJSON();
        jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0;
        jsonUser.Followings = jsonUser.Followings ? jsonUser.Followings.length : 0;
        jsonUser.Followers = jsonUser.Followers ? jsonUser.Followers.length : 0;
        res.json(jsonUser);
    }
    catch (e) {
        console.error(e);
        next(e);
    }
}));
router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('logout 성공');
});
router.post('/login', (req, res, next) => {
    // kakao로그인이면 kakao, google이면 google
    passport.authenticate('local', (err, user, info) => {
        if (err) { // 서버 에러
            console.error(err);
            next(err);
        }
        if (info) { // 로직상의 에러
            return res.status(401).send(info.reason);
        }
        return req.login(user, (loginErr) => __awaiter(this, void 0, void 0, function* () {
            if (loginErr) {
                console.log('로그인 에러');
                return next(loginErr);
            }
            const fullUser = yield db.User.findOne({
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
            });
            // console.log('fulluser = ' + JSON.stringify(fullUser));
            return res.json(fullUser);
        }));
    })(req, res, next);
});
router.post('/:id/follow', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const me = yield db.User.findOne({
            where: { id: req.user.id }
        });
        yield me.addFollowing(req.params.id);
        res.send(req.params.id);
    }
    catch (e) {
        console.error(e);
        next(e);
    }
}));
router.delete('/:id/follow', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const me = yield db.User.findOne({
            where: { id: req.user.id }
        });
        yield me.removeFollowing(req.params.id);
        res.send(req.params.id);
    }
    catch (e) {
        console.error(e);
        next(e);
    }
}));
router.get('/:id/followers', isLoggedIn, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield db.User.findOne({
            where: { id: parseInt(req.params.id, 10) || req.user.id }
        });
        const followers = yield user.getFollowers({
            attributes: ['id', 'nickname']
        });
        res.send(followers);
    }
    catch (e) {
        console.error(e);
        next(e);
    }
}));
router.get('/:id/followings', isLoggedIn, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield db.User.findOne({
            where: { id: parseInt(req.params.id, 10) || req.user.id }
        });
        const followings = yield user.getFollowings({
            attributes: ['id', 'nickname']
        });
        res.send(followings);
    }
    catch (e) {
        console.error(e);
        next(e);
    }
}));
router.delete('/:id/follower', isLoggedIn, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const me = yield db.User.findOne({
            where: { id: req.user.id }
        });
        yield me.removeFollower(req.params.id);
        res.send(req.params.id);
    }
    catch (e) {
        console.error(e);
        next(e);
    }
}));
router.delete('/:id/following', (req, res) => {
});
router.get('/:id/posts', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const posts = yield db.Post.findAll({
            where: {
                UserId: parseInt(req.params.id, 10),
                RetweetId: null,
            },
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
                }],
            order: [["createdAt", "DESC"]]
        });
        res.json(posts);
    }
    catch (e) {
        console.error(e);
        next(e);
    }
}));
router.patch('/nickname', isLoggedIn, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const me = yield db.User.findOne({
            where: { id: req.user.id }
        });
        yield db.User.update({
            nickname: req.body.nickname
        }, {
            where: { id: me.id }
        });
        res.send(req.body.nickname);
    }
    catch (e) {
        console.error(e);
        next(e);
    }
}));
module.exports = router;
//# sourceMappingURL=user.js.map