// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Transaction model (table) by extending off Sequelize's Model class
class Transaction extends Model { }

// set up fields and rules for Transaction model
Transaction.init(
  {
    // Although sequelize will auto generate an ID we have declared it below sot hat we can specify our own fields.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    borrow_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    return_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employee',
        key: 'id',
      },
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'item',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'transaction',
  }
);

module.exports = Transaction;
