const { User } = require('../models');

const userData = [
    {
        username: "username1",
        email: "seededUser1@gmail.com",
        password: "password1"
    },
    {
        username: "username2",
        email: "seededUser2@gmail.com",
        password: "password2"
    },
    {
        username: "username3",
        email: "seededUser3@gmail.com",
        password: "password3"
    },
    {
        username: "username4",
        email: "seededUser4@gmail.com",
        password: "password4"
    },
    {
        username: "username5",
        email: "seededUser5@gmail.com",
        password: "password5"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;