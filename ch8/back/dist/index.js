"use strict";
exports.__esModule = true;
exports.indexRoot = void 0;
var express = require("express");
var morgan = require("morgan");
var models_1 = require("./models");
var user_1 = require("./routes/user");
var post_1 = require("./routes/post");
var posts_1 = require("./routes/posts");
var hashtag_1 = require("./routes/hashtag");
var cookieParser = require("cookie-parser");
var expressSession = require("express-session");
var dotenv = require("dotenv");
var passport = require("passport");
var passport_1 = require("./passport");
var cors = require("cors");
var path = require("path");
exports.indexRoot = path.join(__dirname);
console.log('indexRoot=', exports.indexRoot);
var prod = process.env.NODE_ENV === 'production';
dotenv.config();
var app = express();
models_1["default"].sequelize.sync({ force: false })
    .then(function () {
    console.log('데이터베이스 연결 성공');
})["catch"](function (e) {
    console.error(e);
});
passport_1["default"]();
app.use(morgan('dev'));
app.use('/', express.static('uploads'));
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/user', user_1["default"]);
app.use('/api/post', post_1["default"]);
app.use('/api/posts', posts_1["default"]);
app.use('/api/hashtag', hashtag_1["default"]);
app.get('/', function (req, res) {
    res.send('hello backend');
});
app.listen(prod ? process.env.PORT : 3065, function () {
    console.log('server is running on http://localhost:' + process.env.PORT);
});
