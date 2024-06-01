const router = require('express').Router();
const { Transaction, Item, Employee, Category } = require('../../models');

/* 
The `/api/admin/` endpoint
Route to display the admin dashboard with all the inventory status 
: Borrowed Items (All employees) 
*/

router.get('/', async (req, res) => {
  console.log('ADMIN DASHBORD REQUEST');
  try {
    const transactions = await Transaction.findAll({
      include: [{ model: Employee }, { model: Item }],
    });

    // Serialize transaction data so templates can read it
    const transactionData = transactions.map((transaction) =>
      transaction.get({ plain: true })
    );

    res.render('admin-dashboard', {
      transactionData: transactionData,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* 
The `/api/admin/viewsummary` endpoint
Route to display the bar chart with Number of transactions per employee. 
This summary will display employees details that have not created any borrow request
*/

router.get('/viewsummary', async (req, res) => {
  console.log('ADMIN VIEW SUMMARY CHART REQUEST');
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
router.get('/allitems', async (req, res) => {
  console.log('ADMIN ITEMS REQUEST');
  try {
    const items = await Item.findAll({
      where: {
        is_available: true,
      },
    });
    const unborrowedItemData = items.map((item) => item.get({ plain: true }));

    res.render('admin-items', {
      itemData: unborrowedItemData,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* 
The `/api/admin/add-category` endpoint
Route to add a new category to the table
*/
router.post('/add-category', async (req, res) => {
  // create a new category
  try {
    // Use create method provided by Sequilize to INSERT new tag into category table.
    const newCategory = await Category.create({ name: req.body.categoryname });

    // Returns tag that was created.
    res.status(200).json(newCategory);
  } catch (err) {
    // If above fails, return generic error and confirm not succesful.
    res.status(400).json({
      success: false,
    });
  }
});

/* 
The `/api/admin/add-item` endpoint
Route to add a new item to the table
*/
router.post('/add-item', async (req, res) => {
  // create a new category
  try {
    // Gets id for category_id column
    const categoryId = await Category.findOne({
      where: {
        name: req.body.name,
      },
      raw: true,
    });

    // Create object with all required data to create a new row in item table.
    const itemData = {
      item_name: req.body.item_name,
      item_description: req.body.item_description,
      is_available: req.body.is_available,
      category_id: categoryId.id,
    };

    // Use create method provided by Sequilize to INSERT new item into Item table.
    const newItem = await Item.create(itemData);
    // Returns tag that was created.
    res.status(200).json(newItem);
  } catch (err) {
    // If above fails, return generic error and confirm not succesful.
    res.status(400).json({
      success: false,
    });
  }
});

/* 
The `/admin/category` endpoint
Route to display the Create category page.
*/
router.get('/category', async (req, res) => {
  try {
    const categories = await Category.findAll({});

    // Serialize transaction data so templates can read it
    const categoryData = categories.map((category) =>
      category.get({ plain: true })
    );

    res.render('category-dashboard', {
      categoryData: categoryData,
      logged_in: req.session.logged_in,
      is_admin: req.session.is_admin,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
