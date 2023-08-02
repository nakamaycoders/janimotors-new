const mongoose = require('mongoose');
// require('../.env')
var mongoDBURL= "mongodb+srv://janimotors:janimotors@cluster0.ifzrd.mongodb.net/test"
mongoose.connect(mongoDBURL , {useUnifiedtopology :true , useNewUrlParser : true}).then((data)=>{
    console.log(`mongodb connected with server successfully: ${data.connection.host}`);
})



module.exports = mongoose;