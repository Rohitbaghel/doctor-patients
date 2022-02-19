const express=require('express');

const doctorDetails=require('../Models/Doctor.model');

// const router=express.Router();


const register = async (req, res) =>{

    try{
        
        
        
        // if user is already exist
        let users = await doctorDetails.findOne({email:req.body.email}).lean().exec()
        
        
        
        // if exist than throw an error
        
        if(users){
            return res.status(404).json({message:"Please provide a different email address",status:"Failed"})
        }
        
        
        //if not exist then create user and hash the password 
        users = await doctorDetails.create(req.body)
        
        
        
        // return the user

        res.status(201).json({users})
    }catch(e){
        return res.status(500).json({message:e.message, status:"failed"})
    }


}


const login = async (req, res) => {
    try {
      // check if the email address provided already exist
      let User = await doctorDetails.findOne({ email: req.body.email });
  
      // if it does not exist then throw an error
      if (!User)
        return res.status(400).json({
          status: "failed",
          message: " Please provide correct email address and password",
        });
     console.log(User);
      // else we match the password
      const match =  await User.checkPassword(req.body.password);
      console.log(match)
  
      // if not match then throw an error
      if (!match)
        return res.status(400).json({
          status: "failed",
          message: " Please provide correct email address and password",
        });
  
      // return the user
      res.status(201).json({ User });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  };

module.exports = {register, login}
