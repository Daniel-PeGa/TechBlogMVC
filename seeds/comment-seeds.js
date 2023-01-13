const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "This is the seeded comment for User 1, Post 1. This worked!"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "This is the seeded comment for User 2, Post 2. This worked!"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "This is the seeded comment for User 3, Post 3. This worked!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "This is the seeded comment for User 4, Post 4. This worked!"
    },
    {
        user_id: 5,
        post_id: 5,
        comment_text: "This is the seeded comment for User 5, Post 5. This worked!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;