// const express = require('express');
import * as express from 'express'
import * as morgan from 'morgan';

import db from './models'
import userAPIRouter from './routes/user'
import postAPIRouter from './routes/post'
import postsAPIRouter from './routes/posts'
import hashtagAPIRouter from './routes/hashtag'

import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session'
import * as dotenv from 'dotenv';
import * as passport from 'passport';
import passportConfig from './passport'
import * as cors from 'cors'
import * as fs from 'fs'
import * as path from 'path'

export const indexRoot = path.join(__dirname);
console.log('indexRoot=', indexRoot);

const prod = process.env.NODE_ENV === 'production';
dotenv.config();
const app = express();

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((e: Error) => {
        console.error(e);
    });
passportConfig();

app.use(morgan('dev')); // 이걸쓰면 로그가 남음
app.use('/', express.static('uploads'));
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(express.json()) // app.use('/', express.json()) ; 원래 경로를 저렇게 넣는데 모든경로는 생략가능
app.use(express.urlencoded({ extended: true })); // 요청에 본문이 들어왔을 때 request body에 넣어주는 역할;
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    // name: 'rnwaks'
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter)
app.use('/api/posts', postsAPIRouter)
app.use('/api/hashtag', hashtagAPIRouter)

app.listen(prod ? process.env.PORT : 3065, () => {
    console.log('server is running on http://localhost:' + process.env.PORT);
});