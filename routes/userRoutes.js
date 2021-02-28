const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    app.post('/new/forms', async (req, res) => {
        console.log('The req is', req.body)

        const user = await new User(req.body).save();

        res.send(user);
    });


    app.get('/retrieve/forms', async (req, res) => {
        console.log("The request is", req)
        const forms = await User.find(req.body);

        res.send(forms);

    });

    app.get('/retrieve/all/forms', async (req, res) => {
        const forms = await User.find();

        res.send(forms);

    });


    app.post('/form/update', async (req, res) => {
        //const forms = await User.find();


        const forms = await User.updateOne({name:req.body.name},{$set:req.body});

        res.send(forms);

    });
};

