const mongoose = require("mongoose");
const Note = require("../models/note");

exports.getNotes = async (req, res, next) => {
    const result = await Note.find();

    res.status(200).json({
        result: result
    });
}

exports.uploadNote = async (req, res, next) => {
    const note = new Note({
        file: `http://localhost:3000/${req.file.path}`
    });

    note.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            res.status(500).json({
                pathofmethod: 'uploadNote()',
                error: err
            });
        });
}

exports.deleteNote = (req, res, next) => {

}