const { Transaction } = require('../models');

const transactionData = [
  {
    borrow_date: '2020-03-16T10:28:00.000Z',
    return_date: '2022-01-25T09:10:00.000Z',
    employee_id: 11,
    item_id: 12,
  },
  {
    borrow_date: '2022-04-01T09:38:00.000Z',
    employee_id: 4,
    item_id: 1,
  },
  {
    borrow_date: '2022-04-25T08:30:00.000Z',
    return_date: '2023-08-26T08:30:00.000Z',
    employee_id: 1,
    item_id: 2,
  },
  {
    borrow_date: '2022-05-25T09:38:00.000Z',
    employee_id: 2,
    item_id: 18,
  },
  {
    borrow_date: '2022-05-25T09:38:00.000Z',
    return_date: '2023-02-25T09:22:00.000Z',
    employee_id: 5,
    item_id: 6,
  },
  {
    borrow_date: '2022-05-25T09:38:00.000Z',
    return_date: '2023-05-25T09:38:00.000Z',
    employee_id: 6,
    item_id: 7,
  },
  {
    borrow_date: '2022-05-25T09:38:00.000Z',
    return_date: '2023-05-24T09:38:00.000Z',
    employee_id: 10,
    item_id: 11,
  },
  {
    borrow_date: '2022-05-25T09:38:00.000Z',
    employee_id: 1,
    item_id: 17,
  },
  {
    borrow_date: '2022-07-05T07:28:00.000Z',
    return_date: '2023-05-25T09:38:00.000Z',
    employee_id: 3,
    item_id: 4,
  },
  {
    borrow_date: '2022-07-11T09:38:00.000Z',
    return_date: '2023-05-25T09:38:00.000Z',
    employee_id: 7,
    item_id: 8,
  },
  {
    borrow_date: '2022-08-25T09:38:00.000Z',
    return_date: '2023-05-24T09:38:00.000Z',
    employee_id: 8,
    item_id: 9,
  },
  {
    borrow_date: '2022-11-21T12:42:00.000Z',
    return_date: '2023-02-25T09:22:00.000Z',
    employee_id: 4,
    item_id: 5,
  },
  {
    borrow_date: '2022-11-25T09:38:00.000Z',
    return_date: '2024-05-05T09:38:00.000Z',
    employee_id: 1,
    item_id: 14,
  },
  {
    borrow_date: '2022-11-30T09:38:00.000Z',
    return_date: '2023-11-25T09:38:00.000Z',
    employee_id: 9,
    item_id: 10,
  },
  {
    borrow_date: '2023-01-25T08:30:00.000Z',
    return_date: '2023-07-26T08:30:00.000Z',
    employee_id: 1,
    item_id: 1,
  },
  {
    borrow_date: '2023-02-26T09:38:00.000Z',
    return_date: '2023-10-25T09:22:00.000Z',
    employee_id: 10,
    item_id: 6,
  },
  {
    borrow_date: '2023-05-25T09:38:00.000Z',
    return_date: '2024-04-22T09:38:00.000Z',
    employee_id: 3,
    item_id: 4,
  },
  {
    borrow_date: '2023-06-08T09:38:00.000Z',
    return_date: '2024-05-29T09:38:00.000Z',
    employee_id: 4,
    item_id: 12,
  },
  {
    borrow_date: '2023-06-24T09:38:00.000Z',
    return_date: '2023-11-25T09:38:00.000Z',
    employee_id: 9,
    item_id: 7,
  },
  {
    borrow_date: '2023-06-25T09:38:00.000Z',
    return_date: '2023-10-25T09:38:00.000Z',
    employee_id: 8,
    item_id: 8,
  },
  {
    borrow_date: '2023-07-29T09:45:00.000Z',
    return_date: '2023-08-12T08:30:00.000Z',
    employee_id: 2,
    item_id: 3,
  },
  {
    borrow_date: '2023-07-30T09:38:00.000Z',
    return_date: '2023-11-25T09:38:00.000Z',
    employee_id: 11,
    item_id: 5,
  },
  {
    borrow_date: '2023-08-25T09:38:00.000Z',
    return_date: '2024-01-25T09:38:00.000Z',
    employee_id: 3,
    item_id: 1,
  },
  {
    borrow_date: '2023-09-25T09:38:00.000Z',
    return_date: '2023-11-26T08:30:00.000Z',
    employee_id: 2,
    item_id: 2,
  },
  {
    borrow_date: '2023-10-20T09:38:00.000Z',
    return_date: '2023-11-28T09:38:00.000Z',
    employee_id: 7,
    item_id: 9,
  },
  {
    borrow_date: '2023-05-14T09:38:00.000Z',
    return_date: '2023-11-24T09:38:00.000Z',
    employee_id: 12,
    item_id: 13,
  },
  {
    borrow_date: '2024-12-02T09:38:00.000Z',
    employee_id: 5,
    item_id: 2,
  },
  {
    borrow_date: '2023-12-02T09:38:00.000Z',
    return_date: '2024-05-02T09:38:00.000Z',
    employee_id: 12,
    item_id: 9,
  },
  {
    borrow_date: '2023-12-17T09:38:00.000Z',
    return_date: '2024-04-02T09:38:00.000Z',
    employee_id: 8,
    item_id: 5,
  },
  {
    borrow_date: '2023-12-17T09:38:00.000Z',
    return_date: '2024-04-02T09:38:00.000Z',
    employee_id: 10,
    item_id: 7,
  },
  {
    borrow_date: '2023-12-17T09:38:00.000Z',
    employee_id: 11,
    item_id: 8,
  },
  {
    borrow_date: '2024-01-02T09:38:00.000Z',
    return_date: '2024-05-25T09:38:00.000Z',
    employee_id: 1,
    item_id: 15,
  },
  {
    borrow_date: '2024-01-02T09:38:00.000Z',
    employee_id: 1,
    item_id: 16,
  },
  {
    borrow_date: '2024-01-17T09:38:00.000Z',
    employee_id: 9,
    item_id: 6,
  },
  {
    borrow_date: '2024-02-18T09:38:00.000Z',
    return_date: '2024-05-25T09:38:00.000Z',
    employee_id: 6,
    item_id: 10,
  },
  {
    borrow_date: '2024-03-29T09:38:00.000Z',
    employee_id: 3,
    item_id: 13,
  },
  {
    borrow_date: '2024-05-01T09:38:00.000Z',
    employee_id: 6,
    item_id: 3,
  },
];

const seedTransactions = async () => {
  for (let index = 0; index < transactionData.length; index++) {
    const result = await Transaction.create(transactionData[index]);
  }
};

// Transaction.bulkCreate(transactionData, {
//   individualHooks: true,
//   returning: true,
// });

module.exports = seedTransactions;
