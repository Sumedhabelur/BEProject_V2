const express = require("express");
const FeeDetails = require("../models/feeDetails");

exports.saveFees = (req, res, next) => {
    
    const feeDetails = new FeeDetails({
        cast: req.body.cast,
        class: req.body.class,
        semister: req.body.semister,
        totalfee: req.body.totalfee,
        
    });
    feeDetails
        .save()
        .then((result) => {
            res.status(201).json({
                result: result
            })
        })
        .catch((error) => {

        });
}


exports.getFeesByClass = async (req, res, next) => {
    FeeDetails.find({class: req.params.class })
        .then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.updateFees = async (req, res, next) => {

    const ObjForUpdate = {
        cast: { $set: { cast: req.body.field } },
        class: { $set: { class: req.body.field } },
        semister: { $set: { semister: req.body.field } },
        totalfee: { $set: { totalfee: req.body.field } },
       
    }
    try {
        const result = await FeeDetails.update({ _id: req.params.id }, ObjForUpdate[req.body.updateType]);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json(error)
    }

}

exports.getAllFeesDetail = (req, res, next) => {
    FeeDetails.find()
        .then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}