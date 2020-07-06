import { DataTypes, Model } from 'sequelize';
import { sequelize } from './dbConnection'

class Image extends Model {
  public id!: number;
  public src!: string;
}

// 이미지는 S3 저장
Image.init({
  src: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Image',
  // tableName: 'image',
  charset: 'utf8',
  collate: 'utf8_general_ci'
})

export default Image;