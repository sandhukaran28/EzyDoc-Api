const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 125
    },
    sex: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: Number,
        required: true,
        minlength: 10
    },
    Address: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true
});

const Patient = mongoose.model('patient', patientSchema);

module.exports = Patient;