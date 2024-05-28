const Employee = require('./Employee');
const Item = require('./Item');
const Category = require('./Category');
const Transaction = require('./Transaction');

// Creates a relationship between Items and Categories model, with the categories having a "has many" relationship with Item model.
Category.hasMany(Item, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Creates a relationship between Categories and Items model, with a "belongs to" relationship of the Item to the Category.
Item.belongsTo(Category, {
  foreignKey: 'category_id',
});

Item.belongsToMany(Employee, {
  through: {
    model: Transaction,
    unique: false
  },
});

Employee.belongsToMany(Item, {
  through: {
    model: Transaction,
    unique: false
  },
});

module.exports = { Employee, Item, Category, Transaction };