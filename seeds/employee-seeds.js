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
    first_name: 'Lucas',
    last_name: 'Grant',
    email: 'lucas.grant@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Emily',
    last_name: 'Carter',
    email: 'emily.carter@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Sophie',
    last_name: 'Bennett',
    email: 'sophie.bennett@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Daniel',
    last_name: 'Hunter',
    email: 'daniel.hunter@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Grace',
    last_name: 'Mitchell',
    email: 'grace.mitchell@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Owen',
    last_name: 'Maxwell',
    email: 'owen.maxwell@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Ava',
    last_name: 'Thompson',
    email: 'ava.thompson@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Liam',
    last_name: 'Anderson',
    email: 'liam.anderson@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Mia',
    last_name: 'Robinson',
    email: 'mia.robinson@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Noah',
    last_name: 'Harris',
    email: 'noah.harris@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'Ella',
    last_name: 'Clark',
    email: 'ella.clark@example.com',
    password: 'password123',
    is_admin: false,
  },
  {
    first_name: 'James',
    last_name: 'Lewis',
    email: 'james.lewis@example.com',
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

const seedEmployees = async () => {
  for (let index = 0; index < employeeData.length; index++) {
    const result = await Employee.create(employeeData[index]);
  }
};

// Employee.bulkCreate(employeeData, {
//   individualHooks: true,
//   returning: true,
// });

module.exports = seedEmployees;
