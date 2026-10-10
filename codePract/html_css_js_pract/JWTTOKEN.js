// jwt token
const User = require('.../model/Users');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UsersLogin = async(req,res) => {
     try{
          const {email, password} = req.body;

          const users = await User.findOne({email});
          
          if(!users){
            return res.status(404).json({
              message:"user not found",
            });
          }

           const IsPassword = await bcrypt.compare(password, users.password);

           if(!IsPassword){
                return res.status(400).json({
                  success:false,
                  message:"password is Invalid",
                })
           }

           const Token = await jwt.sign({
            id: users._id.toString()},
            JWT_SECRET,
            {expiresIn:"7d"}
          )
              res.status(200).json({
                success:true,
                message:"login successfully",
                token: Token
              })
     }  catch(error){
      console.log("error", error.message);
         return res.status(500).json({
          success: false,
          message:"internal server error"
         })
     }
}