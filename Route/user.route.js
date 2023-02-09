const mongoose =require('mongoose');
const express = require('express');
const { UserModel } = require('../Model/user.model');
const { json } = require('express');
const jwt = require('jsonwebtoken')

const user = express.Router();

user.post('/signup',async (req,res)=>{
    let payload = req.body;

    try{
        const verify = await UserModel.find({email: payload.email})
        if(verify.length==0){
            const data =  new UserModel(payload);
            await data.save();
            res.send(data +   " Registered");
        }else{
            console.log("Already User Exist");
            res.send("Already USer Exist");
        }  
    } catch (error) {
        console.log(error);
        res.send("Try Regsiter Again");
    } 
})



user.post('/login' , async (req,res)=>{
    let {email,password} = req.body;
     try {
       let data= await UserModel.find({email:email,password:password});
       const token = jwt.sign({course : 'backend'}, 'masai');
  if(data.length>0){
    res.send('Login success' + token)
}else{
    res.send("email or password wrong");
    
  }

     } catch (error) {
        console.log(error);
        res.send("Check email or password");
     }
})



user.get('/signup', async (req,res)=>{
   const data= await UserModel.find();
    res.send(data);
})

module.exports={
    user
}