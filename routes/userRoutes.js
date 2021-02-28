const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    //Create a new form
    app.post('/form/create', async (req, res) => {
        const user = await new User(req.body).save();

        res.send(user);
    });

    //Retrieve a single
    app.get('/form/retrieve', async (req, res) => {
        const forms = await User.find(req.body);

        res.send(forms);
    });

    //Retrieve all forms in User collection
    app.get('/form/retrieve/all', async (req, res) => {
        const forms = await User.find();

        res.send(forms);
    });

    //Update a single form based off name
    app.post('/form/update', async (req, res) => {
        const forms = await User.updateOne({name:req.body.name},{$set:req.body});

        res.send(forms);
    });
};

