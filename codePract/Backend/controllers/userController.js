const User = require("../models/userModels");

// import User from '../models/userModels';

const GetUser = async(req,res) => {
  try{
       const users = await User.find();

       res.status(200).json({
        sucess:true,
        count:users.length,
          data: users
       });
  }
     catch(error){
      res.status(500).json({
        success:false,
        message:error.message
      });
     }
}

const SingleUser = async(req, res) => {
  try{
     const user = await User.findById(req.params.id);
    
     if(!user){
      return res.status(404).json({
        success:false,
        message:"user not found",
      });
     }

     res.status(200).json({
      success:true,
      data: user
     })
    }
    catch(error){
      res.status(500).json({
        success: false,
        message:error.message
      });
    }
}


const CreateUser = async(req,res) => {
  try{
          //  const {name, email, address, phone} = req.body;

           const Users = await User.create(
              req.body
           )

           res.status(201).json({
              success: true,
              message: "user create sucessfully",
              data: Users
           })
  }catch(error){
         res.status(500).json({
          success:false,
          message: error.message
         })
  }
}

const UpdateUser = async(req,res) => {
  try{
       const {name, email, address, phone} = req.body;
        const user = await User.findById(req.params.id);
        if(!user){
          return res.status(404).json({
             success: false,
             message:"user not found"
          })
        }

           user.name = name;
           user.email = email;
           user.address = address;
           user.phone = phone;

           await user.save();

           res.status(200).json({
             success:true,
             message:"successfully updated by users"
           })
  }
     catch(error){
       res.status(500).json({
        success: false,
       message: error.message
       });
     }
}


const PatchUser = async(req,res) => {
  try{  
       const user = await User.findById(req.params.id);
       if(!user){
        return res.status(404).json({
          success:false,
          message:"user not found"
        })
       }

   if (req.body.name !== undefined) {
  user.name = req.body.name;
}
         if (req.body.email !== undefined) {
  user.email = req.body.email;
}

if (req.body.address !== undefined) {
  user.address = req.body.address;
}

if (req.body.phone !== undefined) {
  user.phone = req.body.phone;
}

         await user.save();

         res.status(200).json({
          success:true,
          message:"sucessfully partial update this user"
         })
  }
     catch(error){
      res.status(500).json({
            success: false,
            message: error.message
      });
       
     }
}

const Deleteuser = async(req,res) => {
  try{
       const user = await User.findByIdAndDelete(req.params.id);

       if(!user){
        return res.status(404).json({
          success: false,
          message:"user not found"
        })
       }
           res.status(200).json({
            success: true,
            message: "users delete successfully"
           })
  }
  catch(error){
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}


module.exports = {
  GetUser,
  SingleUser,
  CreateUser,
  UpdateUser,
  PatchUser,
  Deleteuser
};