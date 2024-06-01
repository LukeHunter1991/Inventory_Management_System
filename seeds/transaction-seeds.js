const { Transaction } = require('../models');

const transactionData = [
  {
<<<<<<< HEAD
    borrow_date: "2023-01-25T08:30:00.000Z",
    return_date: "2023-07-26T08:30:00.000Z",
=======
    borrow_date: 'January 10, 2024 11:00:00',
    return_date: '2024-01-15 17:00:00',
>>>>>>> 4ace952204e46c8707f5c25d5dab1afae60a97ea
    employee_id: 1,
    item_id: 1,
  },
  {
<<<<<<< HEAD
    borrow_date: "2022-04-25T08:30:00.000Z",
    employee_id: 1,
    item_id: 2,
  },
  {
    borrow_date: "2022-05-25T09:38:00.000Z",
=======
    borrow_date: '2024-01-12 08:30:00',
    return_date: null,
>>>>>>> 4ace952204e46c8707f5c25d5dab1afae60a97ea
    employee_id: 2,
    item_id: 18,
  },
  {
<<<<<<< HEAD
    borrow_date: "2022-07-05T07:28:00.000Z",
    return_date: "2023-05-25T09:38:00.000Z",
    employee_id: 3,
    item_id: 4,
=======
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
>>>>>>> 4ace952204e46c8707f5c25d5dab1afae60a97ea
  },
  {
    borrow_date: "2024-01-02T09:38:00.000Z",
    return_date: "2024-05-25T09:38:00.000Z",
    employee_id: 1,
    item_id: 15
  },
  {
    borrow_date: "2024-01-02T09:38:00.000Z",
    employee_id: 1,
    item_id: 16
  },
  {
    borrow_date: "2023-07-29T09:45:00.000Z",
    employee_id: 2,
    item_id: 3
  },
  {
    borrow_date: "2023-05-25T09:38:00.000Z",
    return_date: "2024-04-22T09:38:00.000Z",
    employee_id: 3,
    item_id: 4
  },
  {
    borrow_date: "2022-11-21T12:42:00.000Z",
    return_date: "2024-02-25T09:22:00.000Z",
    employee_id: 4,
    item_id: 5
  },
  {
    borrow_date: "2024-05-25T09:38:00.000Z",
    employee_id: 5,
    item_id: 6
  },
  {
    borrow_date: "2022-05-25T09:38:00.000Z",
    return_date: "2024-05-25T09:38:00.000Z",
    employee_id: 6,
    item_id: 7
  },
  {
    borrow_date: "2022-07-11T09:38:00.000Z",
    employee_id: 7,
    item_id: 8
  },
  {
    borrow_date: "2022-08-25T09:38:00.000Z",
    return_date: "2023-05-24T09:38:00.000Z",
    employee_id: 8,
    item_id: 9
  },
  {
    borrow_date: "2022-11-30T09:38:00.000Z",
    return_date: "2023-11-25T09:38:00.000Z",
    employee_id: 9,
    item_id: 10
  },
  {
    borrow_date: "2022-05-25T09:38:00.000Z",
    employee_id: 10,
    item_id: 11
  },
  {
    borrow_date: "2020-03-16T10:28:00.000Z",
    return_date: "2022-01-25T09:10:00.000Z",
    employee_id: 11,
    item_id: 12
  },
  {
    borrow_date: "2023-11-14T09:38:00.000Z",
    employee_id: 12,
    item_id: 13
  },
  {
    borrow_date: "2022-11-25T09:38:00.000Z",
    return_date: "2024-05-05T09:38:00.000Z",
    employee_id: 1,
    item_id: 14
  },
  {
    borrow_date: "2022-05-25T09:38:00.000Z",
    return_date: "2023-05-25T09:38:00.000Z",
    employee_id: 2,
    item_id: 14
  },
  {
    borrow_date: "2024-03-29T09:38:00.000Z",
    employee_id: 3,
    item_id: 13
  },
  {
    borrow_date: "2023-06-08T09:38:00.000Z",
    return_date: "2024-05-29T09:38:00.000Z",
    employee_id: 4,
    item_id: 12
  },
  {
    borrow_date: "2024-05-25T09:38:00.000Z",
    employee_id: 5,
    item_id: 11
  },
  {
    borrow_date: "2024-04-18T09:38:00.000Z",
    return_date: "2022-05-25T09:38:00.000Z",
    employee_id: 6,
    item_id: 10
  },
  {
    borrow_date: "2022-05-20T09:38:00.000Z",
    return_date: "2023-05-28T09:38:00.000Z",
    employee_id: 7,
    item_id: 9
  },
  {
    borrow_date: "2022-05-25T09:38:00.000Z",
    employee_id: 8,
    item_id: 8
  },
  {
    borrow_date: "2023-06-24T09:38:00.000Z",
    return_date: "2024-05-25T09:38:00.000Z",
    employee_id: 9,
    item_id: 7
  },
  {
    borrow_date: "2024-04-21T09:38:00.000Z",
    employee_id: 10,
    item_id: 6
  },
  {
    borrow_date: "2022-07-30T09:38:00.000Z",
    return_date: "2023-06-25T09:38:00.000Z",
    employee_id: 11,
    item_id: 5
  },
  {
    borrow_date: "2022-05-25T09:38:00.000Z",
    return_date: "2024-05-25T09:38:00.000Z",
    employee_id: 12,
    item_id: 4
  },
  {
    borrow_date: "2022-05-25T09:38:00.000Z",
    employee_id: 1,
    item_id: 17
  },
  {
    borrow_date: "2022-05-25T09:38:00.000Z",
    employee_id: 2,
    item_id: 2
  },
  {
    borrow_date: "2022-05-25T09:38:00.000Z",
    return_date: "2024-05-25T09:38:00.000Z",
    employee_id: 3,
    item_id: 1
  },
  {
    borrow_date: "2022-04-01T09:38:00.000Z",
    employee_id: 4,
    item_id: 1
  },
  {
    borrow_date: "2022-06-01T09:38:00.000Z",
    employee_id: 5,
    item_id: 2
  },
  {
    borrow_date: "2022-05-01T09:38:00.000Z",
    employee_id: 6,
    item_id: 3
  },
  {
    borrow_date: "2022-05-17T09:38:00.000Z",
    return_date: "2024-05-02T09:38:00.000Z",
    employee_id: 7,
    item_id: 4
  },
  {
    borrow_date: "2022-08-17T09:38:00.000Z",
    return_date: "2024-04-02T09:38:00.000Z",
    employee_id: 8,
    item_id: 5
  },
  {
    borrow_date: "2022-08-17T09:38:00.000Z",
    employee_id: 9,
    item_id: 6
  },
  {
    borrow_date: "2022-08-17T09:38:00.000Z",
    return_date: "2023-04-02T09:38:00.000Z",
    employee_id: 10,
    item_id: 7
  },
  {
    borrow_date: "2022-09-17T09:38:00.000Z",
    employee_id: 11,
    item_id: 8
  },
  {
    borrow_date: "2022-11-02T09:38:00.000Z",
    return_date: "2024-05-02T09:38:00.000Z",
    employee_id: 12,
    item_id: 9
  }

];

const seedTransactions = () =>
  Transaction.bulkCreate(transactionData, {
    individualHooks: true,
    returning: true,
  });
module.exports = seedTransactions;
