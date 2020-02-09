const express = require("express");
const router = express.Router();
const StudentController = require('../controllers/student');
const multer = require('multer');


// router.param('id', function( req, res, next, id ) {
//     req.id_from_param = id;
//     next();
// });

// // router.get("/class", function( req, res ) {
// //   res.send('some new');
// // });

// // route to trigger the capture
// router.get('/:id', function (req, res) {
//   res.send( "ID: " + req.id_from_param );
// })

router.post('/login', multer().single(), StudentController.loginStudent);
router.post('/register', multer().single(), StudentController.registerStudent);
router.put('/update/:id', multer().single(), StudentController.updateStudent);
router.get('/', multer().single(), StudentController.getAllStudent);
router.get('/student/:id', multer().single(), StudentController.getStudentById);
router.get('/class', multer().single(), StudentController.getStudentByClass);

module.exports = router;