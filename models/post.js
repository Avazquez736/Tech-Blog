const { Model, DataTypes } = require('sequelize');
const { post } = require('../controllers');

 class post extends Model {}

 post.init(
   {
     id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
     },
     title: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     description: {
       type: DataTypes.STRING,
     },
     date_created: {
       type: DataTypes.DATE,
       allowNull: false,
       defaultValue: DataTypes.NOW,
     },
     user_id: {
       type: DataTypes.INTEGER,
       references: {
         model: 'user',
         key: 'id',
       },
     },
   },
   {
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'post',
   }
 );

 module.exports = post;