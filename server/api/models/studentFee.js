const mongoose = require('mongoose');

const Schema = mongoose.Schema({   
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    class: { type: String, required: true },
    payment1: { type: Number, required: true },
    date1: { type: Date, required: true},
    payment2: { type: Number, required: true },
    date2: { type: Date, required: true},
    totalFee: { type: Number, required: true },
    balanceFee: { type: Number, required: true}
});

module.exports = mongoose.model('studentFee', Schema); 