const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/dev');
const bodyParser = require('body-parser');

//When this file boots up this require lets mongoose know to handle the configurations
require('./models/User');

//You need a mongoId key to connect to your database. The one below is my own config key
// that does not get added because its in a gitIgore file. You would need to get your own key
// in order for this connection to work properly.
mongoose.connect(keys.mongoId)

//Sets up express server
const app = express();

//Pase the incoming request bodies in the middleware.
app.use(
    bodyParser.json()
);

//Adds the userRoutes to express servers
require('./routes/userRoutes')(app);

//Just a dummy end point to test express server.
app.get('/user', (req,res) => {
    res.send({hi: 'hello there'})
});

//You can use whatever port you like but I stuck to port 5000.
app.listen(5000);