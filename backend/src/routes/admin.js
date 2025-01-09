const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/visits', adminController.getVisits);
router.get('/uptime', adminController.getUptime);

module.exports = router;
