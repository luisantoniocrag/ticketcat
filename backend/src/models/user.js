const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    sub: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('User', userSchema);