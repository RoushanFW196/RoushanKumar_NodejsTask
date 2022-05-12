
const mongoose = require('mongoose');

const psychiatristSchema= new mongoose.Schema({
    first_name:{type:"string",required: true},
    last_name:{type:"string",required: true},
    hospital:{type:"string",required: true},
    phone:{type:Number,required: true},
    pincode:{type:Number,required: true},
    state:{type:"string",required: true},

},{
    versionKey:false,
    timestamps:true
});




 const psychiatrist=mongoose.model('psychiatrist',psychiatristSchema);
 module.exports =psychiatrist;
