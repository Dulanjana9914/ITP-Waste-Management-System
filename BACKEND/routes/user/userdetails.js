const express = require('express');
const userRouter = require("express").Router();
const passport = require('passport');
const passportConfig = require('../../passport');
const JWT = require('jsonwebtoken');
let User = require("../../Models/User/UserDetail");
const { findById } = require('../../Models/User/UserDetail');


const signToken = userID =>{
  return JWT.sign({
      iss : "ecobin",
      sub : userID
  },"ecobin",{expiresIn : "1h"});
}

//Add user details
userRouter.post('/register',(req,res)=>{
  const { name,username,phone,email,nic,gender,password,img } = req.body;
  User.findOne({username},(err,user)=>{
      if(err)
          res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
      if(user)
          res.status(400).json({message : {msgBody : "Username is already taken", msgError: true}});
      else{
          const newUser = new User({name,username,phone,email,nic,gender,password,img});
          newUser.save(err=>{
              if(err)
                  res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
              else
                  res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}});
          });
      }
  });
});

//Display user details
userRouter.get("/profiles",(req, res) => {
  User.find().exec((err,users) =>{
    if(err){
      return res.status(400).json({
        error:err
      });
    }
    return res.status(200).json({
      success:true,
      existingUsers:users
    });
  });
});

//Display specific user details
userRouter.get(`/profile/:id`,(req, res) => {

  let postId = req.params.id;

  User.findById(postId,(err,users) =>{
    if(err){
      return res.status(400).json({success:false, err})
    }
    return res.status(200).json({
      success:true, 
      users
      });
  });

});

//update user details
userRouter.put('/updateUser/:id',(req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set:req.body
    },
    (err,users)=>{
      if(err){
        return res.status(400).json({error:err});
      }

      return res.status(200).json({
        success:"updated successfully"
      });
    }
  );
});

//Delete student

userRouter.delete('/deleteUser/:id',(req, res) => {
  User.findByIdAndRemove(req.params.id).exec((err,deleteuser) =>{

      if(err) return res.status(400).json({
        message:"Delete Unsuccessfull",err
      });

      return res.json({
        message:"Delete Successfull",deleteuser
      });
  });
});

userRouter.post('/login',passport.authenticate('local',{session : false}),(req,res)=>{
  if(req.isAuthenticated()){
     const {_id,username,name,phone,email,nic,gender,role} = req.user;
     const token = signToken(_id);
     res.cookie('access_token',token,{httpOnly: true, sameSite:true}); 
     res.status(200).json({isAuthenticated : true,user : {_id,username,name,phone,email,nic,gender,role}});
  }
});

userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
  res.clearCookie('access_token');
  res.json({user:{username : "", role : ""},success : true});
});


userRouter.get('/admin',passport.authenticate('jwt',{session : false}),(req,res)=>{
  if(req.user.role === 'admin'){
      res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
  }
  else
      res.status(403).json({message : {msgBody : "You're not an admin,go away", msgError : true}});
});


userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
  const {_id,username,name,phone,email,nic,gender,role} = req.user;
  res.status(200).json({isAuthenticated : true, user : {_id,username,name,phone,email,nic,gender,role}});
});

module.exports = userRouter;
