const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passowrd:{
        type:String,
        required:true
    },
    creationDate:{
        type: Date,
        default: Date.now
    }
})

module.exports = userSchema;