const authMiddleware = (req,res,next) => {
  try{
      const authHeaders = req.headers.authorization;

      if(!authHeaders || !authHeaders.startWith("Bearer ")){
           return res.status(400).json({
              success: false,
              message: "token required"
           })
      }

           const token = authHeaders.split("")[1];

           const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
           )
              jwt.user = decoded;
  }catch(error){
    next(error);
  }
}