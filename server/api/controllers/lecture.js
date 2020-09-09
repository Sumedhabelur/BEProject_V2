const express = require("express");
const Lecture = require("../models/lecture");

exports.registerLecture = (req, res, next) => {
    const date = new Date();
    const lecture = new Lecture({
        class: req.body.class,
        subjectId: req.body.subjectId,
        studentsId: req.body.studentsId,
        date: date
    });
    lecture
        .save()
        .then((result) => {
            res.status(201).json({
                result: result
            })
        })
        .catch((error) => {

        });
}

exports.updateLecture = async (req, res, next) => {

    const ObjForUpdate = {
        class: { $set: { class: req.body.field } },
        subjectId: { $set: { subjectId: req.body.field } },
        studentsId: { $set: { studentsId: req.body.field } },
    }
    try {
        const result = await Lecture.update({ _id: req.params.id }, ObjForUpdate[req.body.updateType]);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

exports.getAllLecture = (req, res, next) => {
    Lecture.find().
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.getLectureById = async (req, res, next) => {
    Lecture.find({ _id: req.params.id }).
        then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}

exports.getLectureByClass = async (req, res, next) => {
    Lecture.find({class: req.params.class })
        .then(result => {
            res.status(200).json({ result });
        })
        .catch(err => {
            res.status(500).json({ message: 'Internal Server Error' })
        })
}