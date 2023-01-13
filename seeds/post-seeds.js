const { Post } = require('../models');

const postData = [
    {
        title: "This is seeded Title 1, by User 1. This worked!",
        post_content: "This is the content for the seeded Post 1, User 1. This worked!",
        user_id: 1
    },
    {
        title: "This is seeded Title 2, by User 2. This worked!",
        post_content: "This is the content for seeded Post 2, User 2. This worked!",
        user_id: 2
    },
    {
        title: "This is seeded Title 3, by User 3. This worked!",
        post_content: "This is the content for seeded Post 3, User 3. This worked!",
        user_id: 3
    },
    {
        title: "This is seeded Title 4, by User 4. This worked!",
        post_content: "This is the content for seeded Post 4, User 4. This worked!",
        user_id: 4
    },
    {
        title: "This is seeded Title 5, by User 5. This worked!",
        post_content: "This is the content for seeded Post 5, User 5. This worked!",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;