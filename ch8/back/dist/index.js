// const express = require('express');
import * as express from 'express';
const morgan = require('morgan');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const hashtagAPIRouter = require('./routes/hashtag');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const passportConfig = require('./passport');
dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();
app.use(morgan('dev')); // 이걸쓰면 로그가 남음
app.use('/', express.static('uploads'));
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(express.json()); // app.use('/', express.json()) ; 원래 경로를 저렇게 넣는데 모든경로는 생략가능
app.use(express.urlencoded({ extended: true })); // 요청에 본문이 들어왔을 때 request body에 넣어주는 역할;
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);
app.listen(3065, () => {
    console.log('server is running on http://localhost:3065');
    ;
});
//# sourceMappingURL=index.js.map