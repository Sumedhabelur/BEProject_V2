const express = require("express");
const router = express.Router();
const StudentFeeController = require('../controllers/studentFee');
const multer = require('multer');

router.post('/register', multer().single(), StudentFeeController.registerFees);
router.put('/update/:id', multer().single(), StudentFeeController.updateFees);
router.get('/', multer().single(), StudentFeeController.getAllFees);
router.get('/class/:class', multer().single(), StudentFeeController.getFeesByClass);
router.get('/:id', multer().single(), StudentFeeController.getFeeById);

module.exports = router;