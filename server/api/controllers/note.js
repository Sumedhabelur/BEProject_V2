const mongoose = require("mongoose");
const Note = require("../models/note");

exports.getNotes = async (req, res, next) => {
    const result = await Note.find();

    res.status(200).json({
        result: result
    });
}

exports.uploadNote = async (req, res, next) => {

    path = req.file.path.replace('\\', '/');

    const note = new Note({
        file: `http://localhost:3000/${path}`,
        noteTitle: req.body.noteTitle,
        class: req.body.class,
        subject: req.body.subject,
        // professor: req.body.professor
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