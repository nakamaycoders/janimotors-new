const mongoose = require('mongoose')

const step3Schema = new mongoose.Schema({
    employmentStatus:{
        type:String,
        required:true,
        trim:true
    },
    incomeSrc:{
        type:String,
    },
    income:{
        type:String,
        required: true,
        trim:true
    },
    incomeSrc2:{
        type:String,
    },
    income2:{
        type:String,
        trim:true
    }
    

},{timestamps:true})

module.exports = mongoose.model("step3", step3Schema);
