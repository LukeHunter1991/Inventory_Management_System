const router = require('express').Router();
const { Transaction, Item, Employee, Category } = require('../../models');

/* 
The `/api/admin/` endpoint
Route to display the admin dashboard with all the inventory status 
: Borrowed Items (All employees) and Unborrowed Items
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

    const items = await Item.findAll({
      where: {
        is_available: true,
      },
    });
    const unborrowedItemData = items.map((item) => item.get({ plain: true }));

    res.render('admin-dashboard', {
      transactionData: transactionData,
      itemData: unborrowedItemData,
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

module.exports = router;
