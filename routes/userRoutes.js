const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    app.post('/new/forms', async (req, res) => {
        console.log('The req is', req.body)

        const user = await new User(req.body).save();

        res.send(user);
    });
};


module.exports = app => {
    app.get('/retrieve/forms', async (req, res) => {
        console.log('The req is', req.body)
        const forms = await User.find(req.body);

        res.send(forms);

    });
};