const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = app => {
    app.post('/users', async (req, res) => {
        console.log('The req is', req)

        const info = {
            name: 'justin matthew morales',
            employeeId: 1234,
            age:28
        };

        const user = await new User(info ).save();

        res.send(user);

    });


};