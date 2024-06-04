const router = require('express').Router();
const { Transaction, Item, Employee, Category } = require('../models');
const { adminAuth } = require('../utils/helpers');
/* 
The `/api/admin/` endpoint
Route to display the admin dashboard with all the inventory status 
: Borrowed Items (All employees) 
*/

router.get('/', adminAuth, async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      include: [
        {
          model: Employee,
          attributes: {
            exclude: ['password'],
          },
        },
        { model: Item, include: { model: Category } },
      ],
      order: ['id'],
    });
    // Serialize transaction data so templates can read it
    const transactionData = transactions.map((transaction) =>
      transaction.get({ plain: true })
    );
    res.render('admin-dashboard', {
      transactionData: transactionData,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* 
The `/api/admin/viewsummary` endpoint
Route to display the bar chart with Number of transactions per employee. 
This summary will not display employees details that have not created any borrow request
*/

router.get('/viewsummary', adminAuth, async (req, res) => {
  try {
    const transactionsummary = await Transaction.count({
      col: 'employee_id',
      group: ['employee_id'],
    });

    const empIds = transactionsummary.map((item) => item.employee_id);

    //This fetch is to retrieve the employee names of the emp ids for the bar chart
    const employees = await Employee.findAll({
      where: {
        id: empIds,
      },
      attributes: {
        exclude: ['password'],
      },
    });

    const employeeData = employees.map((emp) => emp.get({ plain: true }));

    const empNames = employeeData.map(
      (item) => item.first_name + ' ' + item.last_name
    );

    //This is the number of borrow requests per employee
    const txncount = transactionsummary.map((item) => item.count);

    res.render('admin-summary', {
      empNames: empNames,
      txncount: txncount,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* 
The `/api/admin/viewitemcategorysummary` endpoint
Route to display the PIE chart with Number of all items per category. 

*/

router.get('/viewitemcategorysummary', adminAuth, async (req, res) => {
  try {
    const itemsummary = await Item.count({
      col: 'category_id',
      group: ['category_id'],
    });

    const categoryids = itemsummary.map((item) => item.category_id);

    // This fetch is to retrieve the category names of the category ids for the Pie chart
    const categories = await Category.findAll({
      where: {
        id: categoryids,
      },
    });

    const categoryData = categories.map((category) =>
      category.get({ plain: true })
    );

    const categoryNames = categoryData.map((category) => category.name);

    //This is the number of items per category
    const itemcount = itemsummary.map((item) => item.count);

    res.render('admin-itemcategory-summary', {
      categoryNames: categoryNames,
      itemcount: itemcount,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* 
The `/api/admin/allitems` endpoint
Route to display all the unborrowed items  
: All Items (Both Available) 
*/
router.get('/allitems', adminAuth, async (req, res) => {
  try {
    const items = await Item.findAll({
      include: [
        { model: Category },
        {
          model: Transaction,
          include: {
            model: Employee,
            attributes: {
              exclude: ['password'],
            },
          },
        },
      ],
      order: ['id'],
    });
    const unborrowedItemData = items.map((item) => item.get({ plain: true }));

    res.render('admin-items', {
      itemData: unborrowedItemData,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* 
The `/admin/category` endpoint
Route to display the Create category page.
*/
router.get('/category', adminAuth, async (req, res) => {
  try {
    const categories = await Category.findAll({});

    // Serialize transaction data so templates can read it
    const categoryData = categories.map((category) =>
      category.get({ plain: true })
    );
    // Get an object array which counts the amount of items in each category
    const catCount = await Item.count({
      col: 'category_id',
      group: ['category_id'],
    });

    // Add category count to the categoryData object array.
    for (i = 0; i < categoryData.length; i++) {
      catCount[i]
        ? (categoryData[i].count = catCount[i].count)
        : (categoryData[i].count = '0');
      console.log(categoryData);
    }

    res.render('category-dashboard', {
      categoryData: categoryData,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* 
The `/admin/item` endpoint
Route to display the Create item page.
*/
router.get('/item', adminAuth, async (req, res) => {
  try {
    const categories = await Category.findAll({});

    // Serialize transaction data so templates can read it
    const categoryData = categories.map((category) =>
      category.get({ plain: true })
    );

    res.render('add-item', {
      categoryData: categoryData,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to show specific items history
router.get('/item/:id', adminAuth, async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      include: [
        {
          model: Employee,
          attributes: {
            exclude: ['password'],
          },
        },
        { model: Item, include: { model: Category } },
      ],
      where: { item_id: req.params.id },
    });
    // Serialize transaction data so templates can read it
    const transactionData = transactions.map((transaction) =>
      transaction.get({ plain: true })
    );
    res.render('admin-oneitem', {
      transactionData: transactionData,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to filter the all items table
router.get('/allitems/:choice', adminAuth, async (req, res) => {
  try {
    const items = await Item.findAll({
      include: [
        { model: Category },
        { model: Transaction, include: [Employee] },
      ],
      order: [req.params.choice],
    });
    const unborrowedItemData = items.map((item) => item.get({ plain: true }));

    res.render('admin-items', {
      itemData: unborrowedItemData,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
      employee_name: req.session.employee_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
