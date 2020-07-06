var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');
module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'password',
    }, (userId, password, done) => __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield db.User.findOne({ where: { userId } });
            if (!user) {
                return done(null, false, { reason: '존재하지 않는 사용자입니다.' });
            }
            const result = yield bcrypt.compare(password, user.password); // 비밀번호 일치여부
            if (result) {
                // console.log('user1 = ' + JSON.stringify(user));
                return done(null, user);
            }
            return done(null, false, { reason: '비밀번호가 틀립니다.' });
        }
        catch (e) {
            console.error(e);
            return done(e);
        }
    })));
};
//# sourceMappingURL=local.js.map