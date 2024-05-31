const router = require('express').Router();
const { Transaction, Item, Employee, Category } = require('../../models');

router.get('/', async (req, res) => {
  console.log('ADMIN DASHBORD REQUEST');
  try {
    const transactions = await Transaction.findAll({
      include: [{ model: Employee }, { model: Item }],
    });

    // Serialize user data so templates can read it
    const transactionData = transactions.map((transaction) =>
      transaction.get({ plain: true })
    );

    const items = await Item.findAll({
      where: {
        is_available: true,
      },
    });
    const unborrowedItemData = items.map((item) => item.get({ plain: true }));

    // const borrowedItemIds = [];
    // for (let index = 0; index < transactionData.length; index++) {
    //   borrowedItemIds.push(transactionData[index].item_id);
    // }

    // const unborrowedItemData = itemData.filter(
    //   (x) => !borrowedItemIds.includes(x.id)
    // );

    res.render('admin-dashboard', {
      transactionData: transactionData,
      itemData: unborrowedItemData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/viewsummary', async (req, res) => {
  console.log('Admin Report DASHBORD REQUEST');
  try {
    const transactionsummary = await Transaction.count({
      col: 'employee_id',
      group: ['employee_id'],
    });

    const empIds = transactionsummary.map((item) => item.employee_id);
    const employees = await Employee.findAll({
      where: {
        id: empIds,
      },
    });

    const employeeData = employees.map((emp) => emp.get({ plain: true }));

    const empNames = employeeData.map(
      (item) => item.first_name + ' ' + item.last_name
    );

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
