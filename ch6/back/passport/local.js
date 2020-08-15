const passport = require('passport');
const { Strategy: LocalStrategy} = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = () => {
    console.log('[]H');
    passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'password',
    }, async (userId, password, done) => {
        console.log('[]I'); // 로그인 후  (1/2)
        try {
            const user = await db.User.findOne({ where: { userId }});
            if (!user) {
                return done(null, false, { reason: '존재하지 않는 사용자입니다.'});
            }

            const result = await bcrypt.compare(password, user.password); // 비밀번호 일치여부
            if (!result) {
                return done(null, false, {reason: '비밀번호가 틀립니다.'})
            }
            
            return done(null, user);
        } catch (e) {
            console.log('[]K');
            console.error(e);
            return done(e);
        }
    }))
}