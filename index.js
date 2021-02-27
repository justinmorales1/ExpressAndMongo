const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/dev');

//When this file boots up this require lets mongoose know to handle the configurations
require('./models/User');


mongoose.connect(keys.mongoId)

const app = express();


require('./routes/userRoutes')(app);



app.get('/user', (req,res) => {
    res.send({hi: 'hello there'})
});

app.listen(5000);