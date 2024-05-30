const { Item } = require('../models');

const itemData = [
  {
    item_name: 'Lenovo Legion',
    item_description:
      '16" 1TB/32GB RAM, Intel Core i9-13900HX, NVIDIA GeForce RTX 4090',
    is_available: true,
    category_id: 1,
  },
  {
    item_name: 'Dell Alienware',
    item_description:
      '15.6" FHD | Core Ryzen 9-1TB SSD - 32GB RAM - RTX 3070 | 12 Cores @ 4.7 GHz - 8GB GDDR6',
    is_available: false,
    category_id: 1,
  },
  {
    item_name: ' Kogan 24" Monitor',
    item_description: 'Full HD 100Hz Frameless FreeSync Monitor (1920 x 1080)',
    is_available: false,
    category_id: 2,
  },
];

const seedItems = () =>
  Item.bulkCreate(itemData, {
    individualHooks: true,
    returning: true,
  });
module.exports = seedItems;
