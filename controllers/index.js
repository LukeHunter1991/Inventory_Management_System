const router = require('express').Router();
const loginRoutes = require('./loginRoutes.js');
const employeeRoutes = require('./employeeRoutes.js');
const adminRoutes = require('./adminRoutes.js');
const apiRoutes = require('./api');

router.use('/', loginRoutes);
router.use('/employee', employeeRoutes);
router.use('/admin', adminRoutes);
router.use('/api', apiRoutes);

module.exports = router;
