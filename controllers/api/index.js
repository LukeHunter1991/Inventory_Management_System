const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const itemRoutes = require('./itemRoutes');
const userRoutes = require('./userRoutes');

router.use('/category', categoryRoutes);
router.use('/item', itemRoutes);
router.use('/user', userRoutes);

module.exports = router;
