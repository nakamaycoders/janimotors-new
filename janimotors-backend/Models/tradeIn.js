const mongoose = require('mongoose')

const TradeformSchema = new mongoose.Schema({
    yearOption:{
        type:String,
        required:true,
        trim:true
    },
    make:{
        type:String,
        required:true,
        trim:true
    },
    model:{
        type:String,
        required:true,
        trim:true
    },
    vin:{
        type:String,
        required:true,
        trim:true
    },
    bodystyle:{
        type:String,
        trim:true
    },
    trim:{
        type:String,
        trim:true
    },
    exteriorColor:{
        type:String,
        trim:true
    },
    interiorColor:{
        type:String,
        trim:true
    },
    Cylinders:{
        type:String,
        trim:true
    },
    Liters:{
        type:String,
        trim:true
    },
    Mileage:{
        type:String,
        trim:true
    },
    Transmission:{
        type:String,
        trim:true
    },
    LienHolder:{
        type:String,
        trim:true
    },
    EstimatedPayoff:{
        type:String,
        trim:true
    },
    AdditionalOptions:{
        type:String,
        trim:true
    },
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    state:{
        type:String,
        trim:true
    },
    city:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    zip:{
        type:Number,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        trim:true
    },
    view:{
        type: String,
        default: "unread",
        trim: true
    }
   

},{timestamps:true})

module.exports = mongoose.model("Tradeform", TradeformSchema);
