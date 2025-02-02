const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUser);
router.put('/', userController.updateUser);

module.exports = router;
