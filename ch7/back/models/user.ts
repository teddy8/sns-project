import { DataTypes, Model, HasManyAddAssociationMixin, BelongsToManyAddAssociationMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyRemoveAssociationMixinOptions } from 'sequelize';
import { sequelize } from './dbConnection'
import Post from './post';

interface IUser {
  id: number;
  nickname: string;
  userId: string;
  password: string;

  Posts?: Post[];
  Followings?: User[];
  Followers?: User[];
}

class User extends Model implements IUser {
  public id!: number;
  public nickname!: string;
  public userId!: string;
  public password!: string;

  public readonly Posts?: Post[];
  public readonly Followings?: User[];
  public readonly Followers?: User[];

  public addFollowing!: BelongsToManyAddAssociationMixin<User, number>
  public removeFollowing!: BelongsToManyRemoveAssociationMixin<User, number>
  public getFollowers!: BelongsToManyGetAssociationsMixin<User>;
  public getFollowings!: BelongsToManyGetAssociationsMixin<User>;
  public removeFollower!: BelongsToManyRemoveAssociationMixin<User, number>
}

User.init({
  nickname: {
    type: DataTypes.STRING(20), // 20글자 이하
    allowNull: false, // 필수
  },
  userId: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true, // 고유한 값
  },
  password: {
    type: DataTypes.STRING(100), // 100글자 이하
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  // tableName: 'user',
  charset: 'utf8',
  collate: 'utf8_general_ci'
})

export { User, IUser };
export default User;