const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../models');
const passport = require('passport')

router.get('/', (req, res) => { // 내정보 가져오는거
    if (!req.user) {
        return res.status(401).send('로그인이 필요합니다.');
    }

    const user = Object.assign({}, req.user.toJSON());
    delete user.password;
    return res.json(user);
})
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

        console.log(newUser);
        return res.status(200).json(newUser); 
    } catch (e) {
        console.error(e);
        // return res.status(403).send(e);
        return next(e); // 에러처리는 위에서 해줘야함
    }
})
router.get('/:id', (req, res) => { // 남의 정보 가져오는거

})
router.post('/logout', (req, res) => { // 로그아웃
    req.logout();
    req.session.destroy();
    res.send('logout 성공');
})
router.post('/login', (req, res, next) => { // 로그인  /api/user/login
    // kakao로그인이면 kakao, google이면 google
    passport.authenticate('local', (err, user, info) => {  // done( , , )
        if (err) { // 서버 에러
            console.error(err);
            next(err);
        }
        if (info) { // 로직상의 에러
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.log('로그인에러');
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
            console.log('fulluser = ' + JSON.stringify(fullUser));
            return res.json(fullUser); 
        }) 
    })(req, res, next) 
})
router.get('/:id/follow', (req, res) => { // 해당 유저 팔로우 목록 가져오기
    
})
router.post('/:id/follow', (req, res) => { // 해당 유저 팔로우 등록하기
    
})
router.delete('/:id/following', (req, res) => { // 팔로잉 삭제 (내가 따르고 있는 사람 취소)
    
})
router.delete('/:id/follower', (req, res) => { // 팔로워 삭제 (나를 따르고 있는 사람)
    
})
router.get('/:id/posts', (req, res) => { // 특정유저의 모든 게시글 가져오기
    
})

module.exports = router;