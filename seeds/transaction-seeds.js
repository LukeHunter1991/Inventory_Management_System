const { Transaction } = require('../models');

const transactionData = [
  {
    borrow_date: new Date(),
    employee_id: 1,
    item_id: 1,
  },
  {
    borrow_date: new Date(),
    employee_id: 1,
    item_id: 2,
  },
  {
    borrow_date: new Date(),
    employee_id: 2,
    item_id: 3,
  },
];

const seedTransactions = () =>
  Transaction.bulkCreate(transactionData, {
    individualHooks: true,
    returning: true,
  });
module.exports = seedTransactions;
