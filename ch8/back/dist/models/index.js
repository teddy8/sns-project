"use strict";
exports.__esModule = true;
var dbConnection_1 = require("./dbConnection");
var comment_1 = require("./comment");
var hashtag_1 = require("./hashtag");
var image_1 = require("./image");
var post_1 = require("./post");
var user_1 = require("./user");
var db = {
    Comment: comment_1["default"],
    Hashtag: hashtag_1["default"],
    Image: image_1["default"],
    Post: post_1["default"],
    User: user_1["default"],
    sequelize: dbConnection_1.sequelize
};
db.Comment.belongsTo(db.User);
db.Comment.belongsTo(db.Post);
db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
db.Image.belongsTo(db.Post);
db.Post.belongsTo(db.User);
db.Post.hasMany(db.Comment);
db.Post.hasMany(db.Image);
db.Post.belongsTo(db.Post, { as: 'Retweet' });
db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
db.User.hasMany(db.Post, { as: 'Posts' });
db.User.hasMany(db.Comment);
db.User.hasMany(db.Comment);
db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId' });
db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId' });
exports["default"] = db;
