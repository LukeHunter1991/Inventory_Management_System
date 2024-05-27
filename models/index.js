const Item = require('./Item');
const Category = require('./Category');

// Creates a relationship between Items and Categories model, with the categories having a "has many" relationship with Item model.
Category.hasMany(Item, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Creates a relationship between Categories and Items model, with a "belongs to" relationship of the Item to the Category.
Item.belongsTo(Category, {
  foreignKey: 'category_id',
});
