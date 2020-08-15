const passport = require('passport');
const db = require('../models');
const local = require('./local')

module.exports = () => {
    console.log('[]A'); // 로그인 전 (1/4)
    
    passport.serializeUser((user, done) => {
        console.log('[]B'); // 로그인 후 (2/2)
        return done(null, user.id);
    })

    passport.deserializeUser(async (id, done) => {
        console.log('[]C');
        try {
            const user = await db.User.findOne({
                where: { id },
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
                },]
            });
            console.log('[]D');
            return done(null, user); // req.user에 저장
        } catch (e) {
            console.log('[]E');
            console.error(e);
            return done(e);
        }
    })

    console.log('[]F'); // 로그인 전 (2/4)
    local(); // H 로그인 전 (3/4)
    console.log('[]G'); // // 로그인 전 (4/4)
};