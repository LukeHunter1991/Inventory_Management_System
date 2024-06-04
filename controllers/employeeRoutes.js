const router = require('express').Router();
const { Employee, Transaction, Category, Item } = require('../models');
// Import sequelize operators. Not operator used in /inventory-history route to get not null return date
const { Op } = require('sequelize');
const { withAuth } = require('../utils/helpers');

/* 
The `/api/employee/` endpoint
Route to display the employee dashboard with all the borrowed items of the logged in employee. 
*/
router.get('/', withAuth, async (req, res) => {
  try {
    const employeeTransactions = await Transaction.findAll({
      where: {
        employee_id: req.session.user_id,
      },
      include: [
        {
          model: Employee,
          attributes: {
            exclude: ['password'],
          },
        },
        { model: Item },
      ],
    });

    // Serialize user data so templates can read it
    const employeeTransactionData = employeeTransactions.map((transaction) =>
      transaction.get({ plain: true })
    );

    res.render('employee-dashboard', {
      employeeTransactionData: employeeTransactionData,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
/*REMOVE/////////////////////////////////////////
/* 
The `/api/employee/current-inventory` endpoint
Route to display active borrowed inventory only. 
*/
// router.get('/current-inventory', withAuth, async (req, res) => {
//   try {
//     const currentItems = await Transaction.findAll({
//       // Get transactions for relevant employee.
//       // Get's currently borrowed inventory only by ignoring transactions with a return date.
//       where: {
//         employee_id: req.session.user_id,
//         return_date: null,
//       },
//       // Nested eager loading Item and Category tables to get all item data including category.
//       include: {
//         model: Item,
//         include: [Category],
//       },
//       raw: true,
//     });
//     // Return users currently borrowed inventory.
//     res.json(currentItems);
//   } catch (err) {
//     // If try fails, return error.
//     res.sendStatus(400).json(err);
//   }
// });

/* 
The `/api/employee/inventory-history` endpoint
Route to display history of the borrowed inventory only. (Returned Items)
*/

// router.get('/inventory-history', withAuth, async (req, res) => {
//   try {
//     const previousItems = await Transaction.findAll({
//       // Get transactions for relevant employee.
//       // Get's previously borrowed items only by only reteiving transactions with a return date.
//       where: {
//         employee_id: req.session.user_id,
//         // Utilises sequelize not operator to get transactions with a return date.
//         [Op.not]: { return_date: null },
//       },
//       // Nested eager loading Item and Category tables to get all item data including category.
//       include: {
//         model: Item,
//         include: [Category],
//       },
//       raw: true,
//     });
//     // Return all data in current items.
//     res.json(previousItems);
//   } catch (err) {
//     // If try fails, return error.
//     res.sendStatus(400).json(err);
//   }
// });

/* 
The `/api/employee/available` endpoint
Route to see what items are available before submitting a borrow item request. 
*/
// router.get('/available', withAuth, async (req, res) => {
//   try {
//     // Get all available items, including their category.
//     const availableItems = await Item.findAll({
//       include: [Category],
//       where: {
//         is_available: true,
//       },
//       // Orderrs by the category_item so that different categories are grouped together.
//       order: ['category_id'],
//       raw: true,
//     });
//     // Return users available items in inventory.
//     res.json(availableItems);
//   } catch (err) {
//     // If try fails, return error.
//     res.sendStatus(400).json(err);
//   }
// });

//adding a few routes for displaying handlebars
router.get('/history', withAuth, async (req, res) => {
  try {
    const employeeTransactions = await Transaction.findAll({
      where: {
        employee_id: req.session.user_id,
      },
      include: [
        {
          model: Employee,
          attributes: {
            exclude: ['password'],
          },
        },
        { model: Item },
      ],
    });

    // Serialize user data so templates can read it
    const employeeTransactionData = employeeTransactions.map((transaction) =>
      transaction.get({ plain: true })
    );

    res.render('employee-history', {
      employeeTransactionData: employeeTransactionData,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/request', withAuth, async (req, res) => {
  try {
    const itemData = await Item.findAll({
      include: [
        {
          model: Category,
          attributes: ['name'],
        },
      ],
    });
    const items = itemData.map((item) => item.get({ plain: true }));
    res.render('employee-request', {
      items,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/info', withAuth, async (req, res) => {
  try {
    res.render('employee-info', {
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
