const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    //Create a new form will following body
    // {
    //     "name": "Thomas Turpin",
    //     "employeeId": 8675309,
    //     "age": 32
    // }
    app.post('/form/create', async (req, res) => {
        const user = await new User(req.body).save();

        res.send(user);
    });

    //Retrieve a single form with the following body
    // {
    //     "name": "Thomas Turpin",
    //     "employeeId": 8675309,
    //     "age": 32
    // }
    app.get('/form/retrieve', async (req, res) => {
        const forms = await User.find(req.body);

        res.send(forms);
    });

    //Retrieve all forms in User collection
    app.get('/form/retrieve/all', async (req, res) => {
        const forms = await User.find();

        res.send(forms);
    });

    //Update a single form based off name from the following object
    // {
    //     "name": "Thomas Turpin",
    //     "employeeId": 8675309,
    //     "age": 32
    // }
    app.post('/form/update', async (req, res) => {
        const forms = await User.updateOne({name:req.body.name},{$set:req.body});

        res.send(forms);
    });
};

