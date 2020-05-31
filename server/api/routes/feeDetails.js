const express = require("express");
const router = express.Router();
const FeeDetailsController = require('../controllers/feeDetails') 
const multer = require('multer');


router.post('/register', multer().single(), FeeDetailsController.saveFees);
router.get('/class/:class', multer().single(), FeeDetailsController.getFeesByClass);
router.put('/:id', multer().single(), FeeDetailsController.updateFees);
//router.get('/', multer().single(), FeeDetailsController.getAllFeesDetail);


module.exports = router;