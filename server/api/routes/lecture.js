const express = require("express");
const router = express.Router();
const LectureController = require('../controllers/lecture');
const multer = require('multer');

router.post('/', multer().single(), LectureController.registerLecture)
router.get('/', multer().single(), LectureController.getAllLecture);
router.get('/:id', multer().single(), LectureController.getLectureById);
router.put('/:id', multer().single(), LectureController.updateLecture);
router.get('/class/:class', multer().single(), LectureController.getLectureByClass);

module.exports = router;