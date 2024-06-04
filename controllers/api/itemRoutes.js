const router = require('express').Router();
const { Item, Transaction } = require('../../models');
const { adminAuth } = require('../../utils/helpers');

/* 
The `/api/item/add-item` endpoint
Route to add a new item to the table
*/
router.post('/add-item', adminAuth, async (req, res) => {
  // create a new category
  try {
    const categoryId = parseInt(req.body.category_id);
    const is_available = req.body.is_available == 'true';

    // Create object with all required data to create a new row in item table.
    const itemData = {
      item_name: req.body.item_name,
      item_description: req.body.item_description,
      is_available: is_available,
      category_id: categoryId,
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
The `/api/item/borrow` endpoint
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
The `/api/item/return` endpoint
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

module.exports = router;
