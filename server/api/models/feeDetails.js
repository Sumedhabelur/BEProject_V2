const mongoose = require('mongoose');

const Schema = mongoose.Schema({   
    class: { type: String, required: true },
    semester: { type: String, required: true },
    caste: { type: String, required: true },
    totalfee: { type: Number, required: true },
});

module.exports = mongoose.model('FeeDetails', Schema); 