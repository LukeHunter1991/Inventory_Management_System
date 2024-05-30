const router = require('express').Router();
const employeeRoutes = require('./employeeRoutes');
const adminRoutes = require('./adminRoutes');

router.use('/employee', employeeRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
