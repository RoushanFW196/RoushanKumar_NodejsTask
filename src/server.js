
 const express = require('express');
 const app = express();
 const path= require("path");
 const dotenv= require("dotenv");
 dotenv.config({path:path.join(__dirname, './config.env')});
 const port=process.env.PORT 
 const patientcontroller = require('./controller/patient.controller');
 const psychiatristcontroller = require('./controller/psychiatrist.controller')
 const connect = require("./configs/db");
app.use(express.json())
app.use(express.static(__dirname));

app.use("/patient",patientcontroller)
app.use("/psychiatrist",psychiatristcontroller)













console.log("hello");
 app.listen(port, async()=>{
     await connect();
     console.log(`listening on port ${port}`);
 })