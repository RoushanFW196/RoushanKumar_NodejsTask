
const express = require('express');
const {body,validationResult}=require("express-validator");
const router= express.Router();
const Psychiatrist=require("../modals/psychiatrist.models");

router.get("/",(req,res)=>{
  res.status(201).send("hello docor")

})


router.post("/register",
 body("first_name").isLength({max:20}).withMessage(`first_name should be maxm of 20 char`),
 body("last_name").isLength({max:20}).withMessage(`first_name should be maxm of 20 char`),
 body("hospitals").isLength({max:20}).withMessage(`first_name should be maxm of 20 char`),




async(req,res)=>{
 const errors=validationResult(req)
 if(!errors.isEmpty()){
    return res.status(400).json({data:errors.array()})
}
  try{
    const newpsychiatrist=await Psychiatrist.create(req.body);
     console.log(newpsychiatrist)
   return res.status(201).json({doctor:newpsychiatrist});
  }
  catch(err){
      console.log(err);
   return res.status(404).json({err:"something went wrong"})
}
  
})









module.exports=router;