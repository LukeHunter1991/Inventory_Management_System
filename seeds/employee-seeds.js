const { Employee } = require('../models');

const employeeData = [
  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Mike',
    last_name: 'Chan',
    email: 'mike.chan@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Ashley',
    last_name: 'Rodriguez',
    email: 'ashley.rodriguez@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Kevin',
    last_name: 'Tupik',
    email: 'kevin.tupik@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Kunal',
    last_name: 'Singh',
    email: 'kunal.singh@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Malia',
    last_name: 'Brown',
    email: 'malia.brown@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Sarah',
    last_name: 'Lourd',
    email: 'sarah.lourd@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Tom',
    last_name: 'Allen',
    email: 'tom.allen@example.com',
    password: 'password123',
    is_admin: true,
  },
];

const seedEmployees = () =>
  Employee.bulkCreate(employeeData, {
    individualHooks: true,
    returning: true,
  });
module.exports = seedEmployees;
