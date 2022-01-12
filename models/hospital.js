const {
    type
} = require('express/lib/response');
const mongoose = require('mongoose');
const Appointment = require('./appointment');

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    pincode: {
        type: Number,
        required: true,
        minlength: 6
    },
    dName: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10
    },
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }]

});

const Hospital = mongoose.model('hospital', hospitalSchema);

module.exports = Hospital;