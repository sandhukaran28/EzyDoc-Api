const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDb = require('./seed');
mongoose.connect('mongodb://localhost:27017/ezyDoc')
    .then(() => {
        console.log('Connected to database EzyDoc');
    })
    .catch((e) => {
        console.log(e);
    })

// seedDb();

app.get('/', (req, res) => {

    res.send("connected");
})

app.listen(8000, () => {

    console.log("Connected at port 8000");
})