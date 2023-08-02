const mongoose = require('mongoose')

const JointFormSchema = new mongoose.Schema({
    fname:{
          type:String,
     unique:true
    },
    midName:{
          type:String,
      
    },
    lName:{
          type:String,
        
     },


    Suffix:{
          type:String,
           
        trim:true
    },
    homeNum:{
          type:String,
           
        trim:true
    },
    cellNum:{
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
           
        trim:true
    },
    box:{
          type:String,
           
        trim:true
    },
    streetnum:{
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
    CoApplicantRelation:{
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
          
           
        trim:true
    },
    Selfyear: {
          type:String,
          
           
        trim:true
    },
    Selfmonths: {
          type:String,
          
           
        trim:true
    },
    EmpStatus: {
          type:String,
          
           
        trim:true
    },
    PerYear: {
          type:String,
          
           
        trim:true
    },
    Cofname:{
          type:String,
          
           
        trim:true
    },
    CoMidName:{
          type:String,
          
           
        trim:true
    },
    ColName:{
          type:String,
          
           
        trim:true
    },
    CoSuffix:{
          type:String,
          
           
        trim:true
    },
    EmploymentStatus:{
          type:String,
          
           
        trim:true
    },
    CocellNum:{
          type:String,
          
           
        trim:true
    },
    CohomeNum:{
          type:String,
          
           
        trim:true
    },
    Coemail:{
          type:String,
          
           
        trim:true
    },
    CoVemail:{
          type:String,
          
           
        trim:true
    },

    Corelease:{
          type:String,
          
           
        trim:true
    },
    Corr:{
          type:String,
          
           
        trim:true
    },
    Cobox:{
          type:String,
          
           
        trim:true
    },
    Costreet:{
          type:String,
          
           
        trim:true
    },
    CoStreetName:{
          type:String,
          
           
        trim:true
    },
    CoStreetOptional:{
          type:String,
          
           
        trim:true
    },
    Coapt:{
          type:String,
          
           
        trim:true
    },
    Cozip:{
          type:String,
          
           
        trim:true
    },
    Cocity:{
          type:String,
          
           
        trim:true
    },
    CoState:{
          type:String,
          
           
        trim:true
    },
    Corelease2:{
          type:String,
          
           
        trim:true
    },
    CoHouse:{
          type:String,
          
           
        trim:true
    },
    CoYear:{
          type:String,
          
           
        trim:true
    },
    CoMonth:{
          type:String,
          
           
        trim:true
    },
    CoMortgage:{
          type:String,
          
           
        trim:true
    },
    Codob:{
          type:String,
          
           
        trim:true
    },
    CoSSN:{
          type:String,
          
           
        trim:true
    },


    CoSelectHousingStatus:{
          type:String,
          
           
        trim:true
    },
    coSourceOfIncome:{
          type:String,
          
           
        trim:true
    },
    SourceofIncome:{
          type:String,
          
           
        trim:true
    },
    CoEmploymentStatus:{
          type:String,
          
           
        trim:true
    },
    CoEmployer:{
          type:String,
          
           
        trim:true
    },
    CoWorkTitle:{
          type:String,
          
           
        trim:true
    },
    CoWorkPhone:{
          type:String,
          
           
        trim:true
    },
    Coyearss:{
          type:String,
          
           
        trim:true
    },
    Comonthss:{
          type:String,
          
           
        trim:true
    },
    CoSelfWorkPhone:{
          type:String,
          
           
        trim:true
    },
    CoSelfyear:{
          type:String,
          
           
        trim:true
    },
    CoSelfemployer:{
          type:String,
          
           
        trim:true
    },
    CoSelfmonths:{
          type:String,
          
           
        trim:true
    },
    CoEmpStatus:{
          type:String,
          
           
        trim:true
    },
    CoPerYear:{
          type:String,
          
           
        trim:true
    },

    view:{
        type: String,
        default: "unread",
        trim: true
    }

},{timestamps:true})

module.exports = mongoose.model("JointForm", JointFormSchema);
// {
//     type:String,
//       
//     trim:true
// },
