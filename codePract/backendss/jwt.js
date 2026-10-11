const User = require('./model/usersModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const Loginusers = async(req,res) => {
  try{
       const {email, password} = req.body;
        const users = await User.findone({email});

        if(!users){
          return res.status(400).json({
            success:false,
            message:"users not found"
          })
        }

        const Ispassword = await bcrypt.compare(password, users.password);

        if(!Ispassword){
           return res.status(400).json({
            success: false,
            message:"password is invalid"
           })
        }

        const token = jwt.sign(
          {id: users._id.toString()},
          process.env.JWT_SECRET,
          {expiresIn:"7d"}
        )

        res.status(200).json({
            success:true,
            message:"users login successfully",
            token
        })
  }  catch(error){
      res.status(500).json({
        success: false,
        message: error.message
      })
  }
}