const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// creating associations

// user has many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// posts belongs to user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// user belongs to many posts
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

// post belongs to many users
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

// vote belongs to user
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

// vote belongs to post
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

// user has many votes
User.hasMany(Vote, {
    foreignKey: 'user_id'
});

// post has many votes
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

// comments belong to users
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// comments belong to posts
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// users have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// posts have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };
