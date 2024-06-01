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
    item_name: 'Kogan 24" Monitor',
    item_description: 'Full HD 100Hz Frameless FreeSync Monitor (1920 x 1080)',
    is_available: false,
    category_id: 2,
  },
  {
    item_name: 'Dell XPS 13',
    item_description: 'F13.4" FHD+ 120Hz Laptop (Intel Ultra 7)[512GB]',
    is_available: true,
    category_id: 1,
  },
  {
    item_name: 'Apple MacBook Pro',
    item_description: '16 M1 Max, 1TB SSD, 32GB RAM',
    is_available: true,
    category_id: 1
  },
  {
    item_name: 'HP Envy 13',
    item_description: '13.3 4K, Intel i7, 512GB SSD, 16GB RAM',
    is_available: false,
    category_id: 1
  },
  {
    item_name: 'Samsung Odyssey G7',
    item_description: '32 1000R Curved QHD Gaming Monitor',
    is_available: true,
    category_id: 2
  },
  {
    item_name: 'Asus ROG Strix',
    item_description: '17.3 FHD 144Hz, Ryzen 9, 1TB SSD, 32GB RAM, RTX 3080',
    is_available: false,
    category_id: 1
  },
  {
    item_name: 'Logitech MX Keys',
    item_description: 'Wireless Illuminated Keyboard',
    is_available: true,
    category_id: 3
  },
  {
    item_name: 'Microsoft Surface Headphones 2',
    item_description: 'Over-Ear Headphones with Active Noise Cancellation',
    is_available: true,
    category_id: 4
  },
  {
    item_name: 'Corsair K95 RGB Platinum',
    item_description: 'Mechanical Gaming Keyboard',
    is_available: false,
    category_id: 3
  },
  {
    item_name: 'Anker PowerExpand Elite',
    item_description: '13-in-1 Thunderbolt 3 Dock',
    is_available: true,
    category_id: 5
  },
  {
    item_name: 'SanDisk Ultra Flair',
    item_description: '128GB USB 3.0 Flash Drive',
    is_available: false,
    category_id: 6
  },
  {
    item_name: 'Seagate Backup Plus',
    item_description: '5TB External Hard Drive',
    is_available: true,
    category_id: 7
  },
  {
    item_name: 'LG UltraFine 5K Display',
    item_description: '27 5K Monitor with Thunderbolt 3',
    is_available: true,
    category_id: 2
  },
  {
    item_name: 'Sony WH-1000XM4',
    item_description: 'Wireless Noise-Cancelling Over-Ear Headphones',
    is_available: true,
    category_id: 4
  },
  {
    item_name: 'Toshiba Canvio Advance',
    item_description: '2TB Portable External Hard Drive',
    is_available: true,
    category_id: 7
  },
  {
    item_name: 'Kingston DataTraveler',
    item_description: '64GB USB 3.1 Flash Drive',
    is_available: true,
    category_id: 6
  }
];

const seedItems = () =>
  Item.bulkCreate(itemData, {
    individualHooks: true,
    returning: true,
  });
module.exports = seedItems;
