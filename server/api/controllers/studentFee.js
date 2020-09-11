const mongoose = require("mongoose");
const StudentFee = require("../models/studentFee");

exports.registerFees = async(req, res, next) => {

    const studentFee = new StudentFee({
        studentId: req.body.studentId,
        class: req.body.class,
        payment1: req.body.payment1,
        date1: req.body.date1,
        payment2: req.body.payment2,
        date2: req.body.date2,
        totalFee: 70000,
        balanceFee: 70000 - req.body.payment1 - req.body.payment2
    });
    studentFee
    .save()
    .then((result) => {
        res.status(201).json({
            result: result
        })
    })
    .catch((error) => {

    });
}