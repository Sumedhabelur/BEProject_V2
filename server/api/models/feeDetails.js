const mongoose = require('mongoose');

const Schema = mongoose.Schema({   
    class: { type: String, required: true },
    semister: { type: String, required: true },
    cast: { type: String, required: true },
    totalfee: { type: Number, required: true },
});

module.exports = mongoose.model('FeeDetails', Schema); 