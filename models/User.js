const mongoose = require('mongoose');

//Schema is the unique set of properties in each collection
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    employeeId: Number,
    age: Number
});

mongoose.model('users', userSchema);