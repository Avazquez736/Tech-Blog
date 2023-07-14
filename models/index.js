const User = require('./user');
const Comment = require('./comment');
const BlogPost = require('./post');

 User.hasMany(BlogPost, {
     foreignKey: 'user_id',
     onDelete: 'CASCADE'
 });

 BlogPost.belongsTo(User, {
     foreignKey: 'user_id'
 });

 module.exports = { User, Comment, BlogPost }