const mongoose = require('mongoose');

const { Schema } = require("mongoose");

const restoSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    
});

const Resto = mongoose.model('Restaurant', restoSchema);

module.exports= Resto;