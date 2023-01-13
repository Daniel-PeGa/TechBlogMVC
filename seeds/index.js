const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('The database has sycnced');

    await seedUsers();
    console.log('The users have been seeded!');

    await seedPosts();
    console.log('The posts have been seeded');

    await seedComments();
    console.log('The comments ave been seeded');
};

seedAll();