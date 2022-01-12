const mongoose = require('mongoose');
const Hospital = require('./models/hospital');

const hospitals = [{
        name: 'Life Care Hospital',
        address: 'Ludhiana Road',
        city: 'Raikot',
        pincode: 141109,
        dName: 'Dr. Sidhu',
        phone: 9876543210
    },
    {
        name: 'DMC',
        address: 'Ludhiana Road',
        city: 'Ludhiana',
        pincode: 141309,
        dName: 'Dr. Chaudhary',
        phone: 9876543210
    },
    {
        name: 'Appollo',
        address: 'Ludhiana Road',
        city: 'Ludhiana',
        pincode: 141309,
        dName: 'Dr. Mahant',
        phone: 9876543210
    },
]
const seedDb = async () => {

    await Hospital.deleteMany({});
    await Hospital.insertMany(hospitals);
    console.log("Database Seeded");
}

module.exports = seedDb;