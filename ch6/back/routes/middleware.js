

// 왜 안되지
// const db = require('../models');

// exports.isPost = async (req ,res, next) => {
//   try {
//     const post = await db.Post.findOne({ where: { id: req.params.id }});
//     if (post) {
//       next();
//     }
//     else {
//       res.status(404).send('포스트가 존재하지 않습니다.');
//     }
//   } catch (e) {
//     console.error(e);
//     res.status(404).send(e);
//   }
// }

exports.isLoggedIn = (req, res, next) => {
    // if (req.user) {
    if (req.isAuthenticated()) {
        next(); // next에 에러를 넣으면 에러처리를 하는데 안넣으면 다음 미들웨어로 넘어간다 이걸 이용하는 것.
    } else {
        res.status(401).send('로그인이 필요합니다.')
    }
}

exports.isNotLoggedIn = (req, res, next) => {
    // if (req.user) {
    if (!req.isAuthenticated()) {
        next(); // next에 에러를 넣으면 에러처리를 하는데 안넣으면 다음 미들웨어로 넘어간다 이걸 이용하는 것.
    } else {
        res.status(401).send('로그인한 사용자는 접근할 수 없습니다.')
    }
}