
import { sequelize } from './dbConnection';
import Comment from './comment';
import Hashtag from './hashtag';
import Image from './image';
import Post from './post';
import User from './user';

const db = {
  Comment: Comment,
  Hashtag: Hashtag,
  Image: Image,
  Post: Post,
  User: User,
  sequelize: sequelize
}

db.Comment.belongsTo(db.User);
db.Comment.belongsTo(db.Post);

db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });

db.Image.belongsTo(db.Post);

db.Post.belongsTo(db.User); // 테이블에 UserId 컬럼이 생겨요
db.Post.hasMany(db.Comment);
db.Post.hasMany(db.Image);
db.Post.belongsTo(db.Post, { as: 'Retweet' }); // RetweetId 컬럼 생겨요
db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });

db.User.hasMany(db.Post, { as: 'Posts' }); // 한 명이 여러개의 포스팅을 쓸 수 있다
db.User.hasMany(db.Comment);
db.User.hasMany(db.Comment);
db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId' });
db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId' });

export default db;