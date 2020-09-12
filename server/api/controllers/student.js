const mongoose = require("mongoose");
const Student = require("../models/student");
const nodemailer = require('nodemailer');

exports.loginStudent = async (req, res, next) => {
    const result = await Student.find({ userName: req.body.userName, pass: req.body.pass });
    res.status(200).json(result);
}

exports.registerStudent = async (req, res, next) => {
    const date = new Date();

    const year = date.getFullYear().toString();
    let result = await Student.find();
    let userName = '';
    if (req.body.typeOfAdmission === 'DSE') {
        userName = year.slice(-2) + 'D' + 'C' + result.length;
    }
    else userName = year.slice(-2) + 'C' + result.length;
    const student = new Student({
        email: req.body.email,
        pass: generateRandomPassword(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        class: req.body.class,
        admissionDate: date,
        dob: new Date(req.body.dob),
        dept: req.body.dept,
        typeOfAdmission: req.body.typeOfAdmission,
        userName: userName
    });
    student
        .save()
        .then((result) => {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.MAILID,
                    pass: process.env.MAILPASS
                }
            });
            var mailOptions = {
                from: process.env.MAILID,
                to: req.body.email,
                subject: 'Hi SID',
                text: 'http://localhost:4200/student'
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {

                } else {
                    res.status(201).json({
                        res: 'Email Sent',
                        result: result
                    });
                }
            });
        })
        .catch((error) => {

        });

    function generateRandomPassword() {
        return 'Random';
    }
}
exports.updateStudent = async (req, res, next) => {

    const ObjForUpdate = {
        firstName: { $set: { firstName: req.body.field } },
        lastName: { $set: { lastName: req.body.field } },
        email: { $set: { email: req.body.field } },
        class: { $set: { class: req.body.field } },
        dob: { $set: { dob: req.body.field } },
    }
    try {
        const result = await Student.update({ _id: req.params.id }, ObjForUpdate[req.body.updateType]);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json(error)
    }

}
exports.getAllStudent = (req, res, next) => {
    Student.find().
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.getStudentByClass = async (req, res, next) => {
    Student.find({class: req.params.class })
        .then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.getStudentById = async (req, res, next) => {
    Student.findById(req.params.id )
        .then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.getStudentByUname = async (req, res, next) => {
    Student.find({userName: req.params.userName })
        .then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}
