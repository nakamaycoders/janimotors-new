const mongoose = require('mongoose')

const step1Schema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    mname:{
        type:String,
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },

},{timestamps:true})

module.exports = mongoose.model("step1", step1Schema);
