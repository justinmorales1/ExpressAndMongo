const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    app.post('/users', async (req, res) => {
        console.log('The req is', req.body)

        const user = await new User(req.body).save();

        res.send(user);
    });
};