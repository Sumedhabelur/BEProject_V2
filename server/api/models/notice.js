const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    file: { type: String, required: true, },
    noticeTitle: { type: String, required: true },
    professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' }
});

module.exports = mongoose.model('Notice', Schema);