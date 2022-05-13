
const express=require('express');
const router=express.Router();
const path=require('path');
const Patient=require("../modals/patient.model");
const fs=require("fs");
const{body,validationResult}=require("express-validator");

 const upload=require("../utils/fileupload")


router.get('/',(req, res)=>{

  console.log("patient router get");
  res.send("patient get")
})

router.post("/register",
upload.single("patient_image"),
body("countrycode").isNumeric().isLength({minlength:2}) ,
body("name").isLength({min:3}),
body("email").isEmail(),
body("address").isLength({min:10}),
body("mobile").isLength({min:10,max:10}),
body("password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,15}$/, "i"),
 // body("img").isBase64(),
async(req,res)=>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({data:errors.array()})
  }


  try{
    console.log("patient register",req.body)
     
  const newpatient= await Patient.create({
    name:req.body.name,
    email:req.body.email,
    mobile:req.body.mobile,
    address:req.body.address,
    password:req.body.password,
    patient_image:req.file.path,
  })
    
 
  
   return res.status(201).json({user:newpatient})
  
   
  
    }catch(err){
        res.status(404).json({err:"something went wrong"})
    }
})










module.exports = router;