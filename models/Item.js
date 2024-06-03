const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9\s]+$/i,
        max: 30,
      },
    },
    item_description: {
      type: DataTypes.TEXT,
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    category_id: {
      //Foreign Key referencing the category table id
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item',
  }
);

module.exports = Item;
