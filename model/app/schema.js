var mongoose = require('mongoose');
var dbconnect = require('./dbconnect');
var schema = mongoose.Schema;
var arrayInfo = new schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gmail: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    address: {
        type: Array,
        required: true
    }
})
dbconnect.connectToDB();
module.exports = mongoose.model('array', arrayInfo);