import * as passport from 'passport';
import * as bcrypt from 'bcrypt';
import { Strategy } from 'passport-local';
import User from '../models/user';

export default () => {
    passport.use('local', new Strategy({
        usernameField: 'userId',
        passwordField: 'password',
    }, async (userId, password, done) => {
        try {
            const user = await User.findOne({ where: { userId } });
            if (!user) {
                console.log('[]존재하지않는사용자');
                return done(null, false, { message: '존재하지 않는 사용자입니다.' });
            }

            const result = await bcrypt.compare(password, user.password); // 비밀번호 일치여부
            if (!result) {
                console.log('[]비밀번호틀림');
                return done(null, false, { message: '비밀번호가 틀립니다.' })
            }

            return done(null, user);
        } catch (e) {
            console.error(e);
            return done(e);
        }
    }))
}