const router = require('express').Router();
const { Category } = require('../../models');
const { adminAuth } = require('../../utils/helpers');

/* 
The `/api/category/add-category` endpoint
Route to add a new category to the table
*/
router.post('/add-category', adminAuth, async (req, res) => {
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

module.exports = router;
