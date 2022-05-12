const mongoose = require('mongoose');
const dotenv= require("dotenv");
const path = require('path');
dotenv.config({path:path.join(__dirname, './config.env')});
const DB=process.env.DATABASE;


module.exports = async()=>{
  return  mongoose.connect(DB,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
     
  })
}


// password zmhh5ZXaA1V7j27U