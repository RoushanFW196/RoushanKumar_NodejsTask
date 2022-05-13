
const mongoose = require('mongoose');


const patientSchema=new mongoose.Schema({
   // id:{type:Number,required: true},
    name:{type:"string",required: true },
    address:{type:"string",required: true },
    email:{type:"string",required: true },
    mobile:{type:Number,required: true },
    countrycode:{type:Number,required: true},
    password:{type:"string",required: true },
    patient_image:{type:"string",required: true}
   
},{
    versionKey:false,
    timestamps:true
});


  const patient=mongoose.model('patient',patientSchema);
 module.exports=patient;
