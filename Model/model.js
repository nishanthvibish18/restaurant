const mongoose = require('mongoose');

const model = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    food_name:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('items',model);
