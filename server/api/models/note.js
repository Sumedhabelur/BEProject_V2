const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    file: { type: String, required: true, },
    noteTitle: { type: String, required: true },
    class: { type: String, required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    // professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' }
});

module.exports = mongoose.model('Note', Schema);