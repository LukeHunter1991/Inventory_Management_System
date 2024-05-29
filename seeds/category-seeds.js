const { Category } = require('../models');

const categoryData = [
  {
    name: 'Laptop',
  },
  {
    name: 'Monitor',
  },
  {
    name: 'Keyboard',
  },
];

const seedCategories = () =>
  Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });
module.exports = seedCategories;
