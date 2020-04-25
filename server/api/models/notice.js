const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    file: { type: String },
    noticeTitle: { type: String, required: true },
    notice: { type: String, required: true },
    class: { type: String, required: true },
    // professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' }
});

module.exports = mongoose.model('Notice', Schema);