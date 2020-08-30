import * as passport from 'passport';
import db from '../models';
import local from './local'
import User from '../models/user';

export default () => {
    // passport.serializeUser((user: User, done) => {
    passport.serializeUser((user: any, done) => {
        console.log('[]user.id=', user.id);
        return done(null, user.id);
    })

    // passport.deserializeUser(async (id: number, done) => {
    passport.deserializeUser(async (id: any, done) => {
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

            return done(null, user); // req.user에 저장
        } catch (e) {
            console.error(e);
            return done(e);
        }
    })

    local();
};