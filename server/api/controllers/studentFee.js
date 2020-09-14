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

    const fee = await StudentFee.findOne({ _id: req.params.id });
    if((fee.balanceFee - req.body.field) < 0 ){
        return res.status(500).json('Invalid Operation')
    }
    console.log(fee)
    console.log(req.body)
    const ObjForUpdate = {
        payment1: { $set: { payment1: req.body.field, balanceFee: fee.balanceFee - req.body.field } },
        date1: { $set: { date1: req.body.field } },
        payment2: { $set: { payment2: req.body.field, balanceFee: fee.balanceFee - req.body.field} },
        date2: { $set: { date2: req.body.field } },
        
    }
    try {
        const result = await StudentFee.update({ _id: req.params.id }, ObjForUpdate[req.body.updateType]);
        res.status(200).json({ result });
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
    StudentFee.findById(req.params.id)
        .then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}