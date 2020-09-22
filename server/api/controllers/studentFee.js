const mongoose = require("mongoose");
const StudentFee = require("../models/studentFee");

exports.registerFees = async (req, res, next) => {

    console.log(req.body.studentId);
    const balanceFee = 70000 - req.body.payment1 - (req.body.payment2 ? req.body.payment2 : 0);
    const studentFee = new StudentFee({
        studentId: req.body.studentId,
        class: req.body.class,
        payment1: req.body.payment1,
        date1: req.body.date1,
        payment2: req.body.payment2,
        date2: req.body.date2,
        totalFee: 70000,
        balanceFee: balanceFee
    });
    console.log(studentFee);
    studentFee
        .save()
        .then((result) => {
            res.status(201).json({
                result: result
            })
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            })
        });
}

exports.updateFees = async (req, res, next) => {
    try {
        const result = await StudentFee.update({ _id: req.params.id }, req.body);
        const fee = await StudentFee.findOne({ _id: req.params.id });
        res.status(200).json(fee);
    } catch (error) {
        res.status(500).json(error)
    }

}

exports.getAllFees = async (req, res, next) => {
    StudentFee.find().
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.getFeesByClass = async (req, res, next) => {
    StudentFee.find({ class: req.params.class }).populate("studentId")
        .then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.getFeeById = async (req, res, next) => {
    StudentFee.find({ studentId: req.params.studentId }).populate("studentId")
        .then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}