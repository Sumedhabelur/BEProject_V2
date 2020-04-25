const express = require("express");
const router = express.Router();
const NoticeController = require('../controllers/notice');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/', NoticeController.getNotice);
router.post('/upload', upload.single('file'), NoticeController.uploadNotice);
router.post('/delete', NoticeController.deleteNotice);

module.exports = router;