import { DataTypes, Model } from 'sequelize';
import { sequelize } from './dbConnection';
import User from './user';

class Comment extends Model {
  public id!: number;
  public content!: string;
  public readonly User?: User;
}

Comment.init({
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'Comment',
  // tableName: 'comment',
  charset: 'utf8mb4',
  collate: 'utf8mb4_general_ci'
})

export default Comment;