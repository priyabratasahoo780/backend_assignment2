// custom middleware

const Middlewares = (req,res,next) => {
   const {name, email} = req.body;
   if(!name || !email){
      return res.status(400).json({
         message:"name, email are required",
      })
   }
      next();
}

module.exports = CustomMiddleware;



// authMiddleware

const AuthMiddleware = (req,res, next) => {
  const token = req.headers.authorization;

  if(!token){
    return res.status(400).json({
      message:"error"
    })
  }
      next();
}


     const autMidd = async(req,res,next) => {
          try{
                 const authheader = req.header.authorization;

                 if(!authheader || !authheader.statWith("Bearer ")){
                    return res.status(404).json({
                         success:false,
                         message:"token required"
                    });
                 }

                 const token = authheader.split(" ")[1];

                 const decoded = jwt.verify(
                    token,
                    process.env.JWT_SECRET
                 );
                 req.user = decoded;
                 next();
          } catch(error){
             next(error);
         }
     }
// router middleware


const express = require('express');

const router = express.Router;

const RouterMiddleware = (req,res,next) => {
     console.log("Router middleware");
     next();
}

router.use(RouterMiddleware);

router.get("/users", (req,res) => {
      res.send("users lists");
});


// error middleware

const errorMiddleware = (err,req,res,next) => {
   res.status(500).json({
    message:"internal server error",
   })
     next();
}

module.exports = errorMiddleware;