
 const express = require('express');
 const app = express();
 const patientcontroller = require('./controller/patient.controller');
 const connect = require("./configs/db");
app.use(express.json())


app.use("/patient",patientcontroller)














console.log("hello");
 app.listen(1200, async()=>{
     await connect();
     console.log("listening onn port 1200")
 })