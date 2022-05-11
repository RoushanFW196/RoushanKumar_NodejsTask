
const mongoose = require('mongoose');


const patientSchema=new mongoose.Schema({
    name:{type:"string",required: true },
    address:{type:"string",required: true },
    email:{type:"string",required: true },
    mobile:{type:Number,required: true },
    countrycode:{type:Number,required: true},
    password:{type:"string",required: true },
    img:
    {
        data: Buffer,
        contentType: String
    }
},{
    versionKey:false,
    timestamps:true
});


 patient=mongoose.model('patient',patientSchema);
 module.exports=patient;
