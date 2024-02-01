const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
dotenv.config()
const app= express();
app.use(express.json());
app.use(cookieParser())
app.use(cors());

let corsoptions={
    origin:['http://localhost:7000']
},
port=7000;
app.listen(port,(req,res)=>{
    console.log('listening port 7000')
});
url="mongodb://localhost:27017/passwordbackend"
 mongoose.connect(url)
 .then(console.log('database connected successfully'))
 .catch(err=>{
    console.log("error",err)
})
const passwordReset = require("./Route/resetpw");
const userroute= require('./Route/user')
  



app.use("/", cors(corsoptions),passwordReset);
app.use("/",cors(corsoptions),userroute)