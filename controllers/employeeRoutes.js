const router = require('express').Router();
const { Employee, Transaction, Category, Item } = require('../models');
// Import sequelize operators. Not operator used in /inventory-history route to get not null return date
const { Op } = require('sequelize');
const { withAuth } = require('../utils/helpers');

/* 
The `/api/employee/login` endpoint
Route to authenticate the employee and direct to dashboard based on the Role of the employee.
 The req.body should look like this
{
  "email" : "allen@abc.com",
  "password" : "123"
}
*/
router.post('/login', async (req, res) => {
  try {
    const employeeData = await Employee.findOne({
      where: { email: req.body.email },
    });

    if (!employeeData) {
      res.status(400).json({
        message: 'Incorrect email or password, please try again',
      });
      return;
    }

    const validPassword = await employeeData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: 'Incorrect email or password, please try again',
      });
      return;
    }
    req.session.employee_name =
      employeeData.first_name.charAt(0) + employeeData.last_name.charAt(0);
    req.session.user_id = employeeData.id;
    req.session.is_admin = employeeData.is_admin;
    req.session.logged_in = true;

    res.json({ employee: employeeData, message: 'You are now logged in!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

/* 
The `/api/employee/signup` endpoint
Route to create a new employee 
 The req.body should look like this
{   
  "firstname": "Tom",
  "lastname": "Allen",
  "email" : "allen@abc.com",
  "password" : "password123",
  "isAdmin": "true/false",
}
*/
router.post('/signup', async (req, res) => {
  try {
    // All the fields you can create and the data attached to the request body.
    //firstname, lastname, email, password, isAdmin

    let isAdmin = req.body.isAdmin === 'true';

    const employeeData = await Employee.create({
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      is_admin: isAdmin,
    });

    req.session.user_id = employeeData.id;
    req.session.is_admin = employeeData.is_admin;
    req.session.logged_in = true;

    res
      .status(200)
      .json({ employee: employeeData, message: 'You are now logged in!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

/* 
The `/api/employee/` endpoint
Route to display the employee dashboard with all the borrowed items of the logged in employee. 
*/
router.get('/', async (req, res) => {
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

/* 
The `/api/employee/current-inventory` endpoint
Route to display active borrowed inventory only. 
*/
router.get('/current-inventory', async (req, res) => {
  try {
    const currentItems = await Transaction.findAll({
      // Get transactions for relevant employee.
      // Get's currently borrowed inventory only by ignoring transactions with a return date.
      where: {
        employee_id: req.session.user_id,
        return_date: null,
      },
      // Nested eager loading Item and Category tables to get all item data including category.
      include: {
        model: Item,
        include: [Category],
      },
      raw: true,
    });
    // Return users currently borrowed inventory.
    res.json(currentItems);
  } catch (err) {
    // If try fails, return error.
    res.sendStatus(400).json(err);
  }
});

/* 
The `/api/employee/inventory-history` endpoint
Route to display history of the borrowed inventory only. (Returned Items)
*/

router.get('/inventory-history', async (req, res) => {
  try {
    const previousItems = await Transaction.findAll({
      // Get transactions for relevant employee.
      // Get's previously borrowed items only by only reteiving transactions with a return date.
      where: {
        employee_id: req.session.user_id,
        // Utilises sequelize not operator to get transactions with a return date.
        [Op.not]: { return_date: null },
      },
      // Nested eager loading Item and Category tables to get all item data including category.
      include: {
        model: Item,
        include: [Category],
      },
      raw: true,
    });
    // Return all data in current items.
    res.json(previousItems);
  } catch (err) {
    // If try fails, return error.
    res.sendStatus(400).json(err);
  }
});

/* 
The `/api/employee/available` endpoint
Route to see what items are available before submitting a borrow item request. 
*/
router.get('/available', async (req, res) => {
  try {
    // Get all available items, including their category.
    const availableItems = await Item.findAll({
      include: [Category],
      where: {
        is_available: true,
      },
      // Orderrs by the category_item so that different categories are grouped together.
      order: ['category_id'],
      raw: true,
    });
    // Return users available items in inventory.
    res.json(availableItems);
  } catch (err) {
    // If try fails, return error.
    res.sendStatus(400).json(err);
  }
});

/* 
The `/api/employee/borrow` endpoint
Route to create a borrow item request. 
*/
router.post('/borrow', async (req, res) => {
  try {
    // Get employee id and item id to update transaction table
    const transactionData = {
      employee_id: req.session.user_id,
      item_id: req.body.item_id,
    };

    // Create variable to mark itema s not available
    const itemAvailable = {
      is_available: false,
    };

    // Update relevant item to not available
    await Item.update(itemAvailable, {
      where: {
        id: req.body.item_id,
      },
    });

    // Inesrt new transaction into transaction table.
    // Only need employee id and item id as borrow date is current timesatamp and return date is null.
    await Transaction.create(transactionData);

    res.sendStatus(200);
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
});

/* 
The `/api/employee/return` endpoint
Route to return a borrowed item. 
*/
router.put('/return/:id', async (req, res) => {
  try {
    // Create current date object to be inserted as return date
    const returnDate = {
      return_date: new Date(),
    };
    // Create variable to mark item as available again
    const itemAvailable = {
      is_available: true,
    };

    // Update relevant item to be available
    const response = await Item.update(
      { is_available: true },
      {
        where: {
          id: req.body.item_id,
        },
      }
    );
    console.log('this is response :', response);
    // Update transaction table to add return date to relevant row
    await Transaction.update(returnDate, {
      // Only updates row where borrow_date, employee, and item match to ensure correct transaction is updated.
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(200);
    // If fails, return error
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
    });
  }
});

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