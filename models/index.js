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

// Creates a relationship between Employee and Transaction model, with the Transaction having a "has many" relationship with Employee model.
Employee.hasMany(Transaction, {
  foreignKey: 'employee_id',
  onDelete: 'CASCADE',
});

// Creates a relationship between Employee and Transaction model, with a "belongs to" relationship of the Transaction to the Employee.
Transaction.belongsTo(Employee, {
  foreignKey: 'employee_id',
});

// Creates a relationship between Items and Transaction model, with the Transaction having a "has many" relationship with Item model.
Item.hasMany(Transaction, {
  foreignKey: 'item_id',
  onDelete: 'CASCADE',
});

// Creates a relationship between Transaction and Items model, with a "belongs to" relationship of the Item to the Transaction.
Transaction.belongsTo(Item, {
  foreignKey: 'item_id',
});

module.exports = { Employee, Item, Category, Transaction };
