const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    file: { type: String, required: true, },        
    });

module.exports = mongoose.model('Note', Schema);