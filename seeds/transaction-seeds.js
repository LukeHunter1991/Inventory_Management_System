const { Transaction } = require('../models');

const transactionData = [
  {
    borrow_date: 'January 10, 2024 11:00:00',
    return_date: '2024-01-15 17:00:00',
    employee_id: 1,
    item_id: 1,
  },
  {
    borrow_date: '2024-01-12 08:30:00',
    return_date: null,
    employee_id: 2,
    item_id: 3,
  },
  {
    borrow_date: '2024-01-05 09:30:00',
    return_date: '2024-01-10 16:00:00',
    employee_id: 4,
    item_id: 6,
  },
  {
    borrow_date: '2024-01-08 10:00:00',
    return_date: null,
    employee_id: 5,
    item_id: 2,
  },
];

const seedTransactions = () =>
  Transaction.bulkCreate(transactionData, {
    individualHooks: true,
    returning: true,
  });
module.exports = seedTransactions;
