const seedEmployees = require('./employee-seeds');
const seedCategories = require('./category-seeds');
const seedItems = require('./item-seeds');
const seedTransactions = require('./transaction-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedEmployees();
    console.log('\n----- EMPLOYEES SEEDED -----\n');

    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedItems();
    console.log('\n----- ITEMS SEEDED -----\n');

    await seedTransactions();
    console.log('\n----- TRANSACTIONS SEEDED -----\n');

    process.exit(0);
};

seedAll();