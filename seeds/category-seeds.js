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
  {
    name: 'Headset',
  },
  {
    name: 'Docking Station',
  },
  {
    name: 'USB Flash Drive',
  },
  {
    name: 'External Hard Drive',
  },
];

const seedCategories = async () => {
  for (let index = 0; index < categoryData.length; index++) {
    const result = await Category.create(categoryData[index]);
  }
};

// Category.bulkCreate(categoryData, {
//   individualHooks: true,
//   returning: true,
// });

module.exports = seedCategories;
