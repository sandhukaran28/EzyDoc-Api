const mongoose = require('mongoose');
const Patient = require('./patient');
const AppointmentSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true,
        trim: true
    },
    openTime: {
        type: Date
    },
    closeTime: {
        type: Date
    },
    max: {
        type: Number,
        min: 1,
        required: true
    },
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }]

});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;