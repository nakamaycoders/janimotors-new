const mongoose = require('mongoose')

const step2Schema = new mongoose.Schema({
    streetNo:{
        type:String,
        required:true,
        trim:true
    },
    streetName:{
        type:String,
        required:true,
    },
    Apartment:{
        type:String,
        trim:true
    },
    zipCode:{
        type:Number,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    state:{
        type:String,
        required:true,
        trim:true
    },
    housingStatus:{
        type:String,
        required:true,
        trim:true
    },
    timeAtAddress:{
        type:Number,
        required:true,
        trim:true
    },
    mortgage:{
        type:Number,
        required:true,
        trim:true
    },
    SSN:{
        type:String,
        required:true,
        trim:true
    },

},{timestamps:true})

module.exports = mongoose.model("step2", step2Schema);
