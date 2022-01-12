const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.send("connected");
})

app.listen(8000, () => {

    console.log("Connected at port 8000");
})