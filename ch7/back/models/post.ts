import { DataTypes, Model, HasManyAddAssociationMixin, HasManyRemoveAssociationMixin } from 'sequelize';
import { sequelize } from './dbConnection'
import Hashtag from './hashtag';
import Comment from './comment';
import { User } from './user';
import Image from './image';

class Post extends Model {
  public id!: number;
  public content!: string;

  public UserId!: number;
  public RetweetId!: number | null;

  public addHashtags!: HasManyAddAssociationMixin<Hashtag, number>
  public addComment!: HasManyAddAssociationMixin<Comment, number>
  public addLiker!: HasManyAddAssociationMixin<User, number>
  public addImages!: HasManyAddAssociationMixin<Image, number>
  public removeLiker!: HasManyRemoveAssociationMixin<User, number>

  public readonly Retweet?: Post;
  public readonly User?: User;
}

Post.init({
  content: {
    type: DataTypes.TEXT, // 매우 긴 글
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Post',
  // tableName: 'post',
  charset: 'utf8mb4',
  collate: 'utf8mb4_general_ci'
})

export default Post;