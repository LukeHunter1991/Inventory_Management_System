const router = require('express').Router();
const { Item } = require('../../models');
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

module.exports = router;
