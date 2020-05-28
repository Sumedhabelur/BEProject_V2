const mongoose = require('mongoose');

const Schema = mongoose.Schema({   
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    semester: { type: String, required: true },
    //caste: { type: String, required: true },
    //Add caste in student model
    payment1: { type: Number, required: true },
    date1: { type: Date, required: true},
    payment2: { type: Number, required: true },
    date2: { type: Date, required: true},
    scholarship: { type: Number, required: true },
    balancefee: { type: Number, required: true}
});

module.exports = mongoose.model('studentFee', Schema); 