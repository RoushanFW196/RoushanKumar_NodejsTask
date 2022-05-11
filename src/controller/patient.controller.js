
const express=require('express');
const router=express.Router();
const patient=require("../modals/patient.model")


router.get('/', (req, res)=>{
  console.log("patient router get");
  res.send("patient get")
})

router.post("/register",(req,res)=>{
     
      res.send(req.body)
})










module.exports = router;