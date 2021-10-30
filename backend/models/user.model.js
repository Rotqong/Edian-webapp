const mongoose = require('mongoose');

const { Schema } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
}, {
    timestamp: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;