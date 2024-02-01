const  express = require('express');
const route = express.Router();
const cors = require('cors')
const userdata= require('../Modal/user')
let corsoptions={
  origin:['http://localhost:7000']
}
route.post('/user/create',cors(corsoptions),(req,res)=>{
    const ud = new userdata(req.body)
    ud.save();
    res.status(201).json(ud)
    
});
route.post( '/user/login', cors(corsoptions), async(req,res) =>{
    const User = await userdata.findOne(req.body);
    if(User){
      res.status(201).json(User);
    }else{
      res.status(500).json('user login failed'); 
    }
  });
  route.get('/getuser/:id',cors(corsoptions),async(req,res)=>{
    try{
      const user= await userdata.findById(req.params.id)
      res.status(200).json(user);
    }
    catch{
      res.status(500).json({ error:"user not found"});
    }

  });
route.put('/editpassword/:id', cors(corsoptions),async(req,res)=>{
   
    const pw = await userdata.findByIdAndUpdate(req.params.id,req.body)
    console.log(pw);
    res.status(201).json(pw)
    
});

  module.exports=route;