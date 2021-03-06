const express = require("express");
const router = express.Router();
const NoteController = require('../controllers/note');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

//   const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   }; 

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    // fileFilter: fileFilter
});

router.get('/', NoteController.getNotes);
router.post('/upload', upload.single('note'), NoteController.uploadNote);
router.post('/delete', NoteController.deleteNote);

module.exports = router;