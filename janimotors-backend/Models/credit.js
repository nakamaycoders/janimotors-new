const mongoose = require('mongoose')

const creditSchema = new mongoose.Schema({
    fName: {
        type:String,
          
        trim:true
    },
    lName: {
        type:String,
          
        trim:true
    },
    mName: {
        type:String,
          
        trim:true
    },
    Suffix: {
        type:String,
        trim:true
    },
    homeNum: {
        type:String,
          
        trim:true
    },
    cellNum: {
        type:String,
          
        trim:true
    },
    email:{
        type:String,
          
        trim:true
    },
    Vemail:{
        type:String,
          
        trim:true
    },
    rr:{
        type:String,
        //   
        trim:true
    },
    box:{
        type:String,
        //   
        trim:true
    },
    street:{
        type:String,
          
        trim:true
    },
    StreetName:{
        type:String,
          
        trim:true
    },
    StreetOptional:{
        type:String,
        trim:true
    },
    apt:{
        type:String,
          
        trim:true
    },
    zip:{
        type:String,
          
        trim:true
    },
    city:{
        type:String,
          
        trim:true
    },
    State:{
        type:String,
          
        trim:true
    },
    House:{
        type:String,
          
        trim:true
    },
    Year:{
        type:String,
          
        trim:true
    },
    Month:{
        type:String,
          
        trim:true
    },
    Mortgage:{
        type:String,
          
        trim:true
    },
    Dob:{
        type:String,
          
        trim:true
    },
    SSN:{
        type:String,
          
        trim:true
    },
    SelectHousingStatus: {
        type:String,
          
        trim:true
    },
    Employer: {
        type:String,
          
        trim:true
    },
    WorkTitle: {
        type:String,
          
        trim:true
    },
    WorkPhone: {
        type:String,
          
        trim:true
    },
    yearss: {
        type:String,
          
        trim:true
    },
    monthss:{
        type:String,
          
        trim:true
    },
    SelfWorkPhone: {
        type:String,
        //   
        trim:true
    },
    Selfyear: {
        type:String,
        //   
        trim:true
    },
    Selfmonths: {
        type:String,
        //   
        trim:true
    },
    EmpStatus: {
        type:String,
          
        trim:true
    },
    PerYear: {
        type:String,
          
        trim:true
    }, view:{
        type: String,
        default: "unread",
        trim: true
    }
},{timestamps:true})

module.exports = mongoose.model("credit", creditSchema);
// type:String,
//         required: true,
//         trim:true