const User  = require('../model/usersModels');



const GetUsers = async(req,res) => {
    try{
          const users = await User.find();
         
              res.status(200).json({
                success:true,
                count: users.length,
                data:  users
              });
    }
       catch(error){
        return res.status(500).json({
          success:false,
          message:error.message
        });
       }
}


const SingleUsers = async(req, res) => {
    try{
           const users = await User.findById(req.params.id);
           if(!users){
            return res.status(404).json({
              success:false,
              message:"users not found"
            });
           }

           res.status(200).json({
            success:true,
              data: users
           })
    }
     catch(error){
        return res.status(500).json({
          success:false,
          message:error.message
        })
     }
}


const CreateUsers = async(req, res) => {
   try{
        //  const {name, email, password} = req.body;

         const Users = await User.create(
           req.body
         )

         res.status(200).json({
             success:true,
             message:"user create successfully"
         })
   } catch(error){
       return res.status(500).json({
         success:false,
         message:error.message
       })
   }
}


const PutUpdates = async(req,res) => {
   try{
      const {name, email, password} = req.body;
         const users = await User.findById(req.params.id);

       if(!users){
            return res.status(404).json({
              success:false,
              message:"users not found"
            });
           }

           users.name = name;
           users.email = email;
           users.password = password;

           await users.save();

           res.status(200).json({
             success:true,
             message:"user updated successfully"
         })
   }
       catch(error){
       return res.status(500).json({
         success:false,
         message:error.message
       })
   }
}





const PatchUpdates = async(req,res) => {
   try{
         const users = await User.findById(req.params.id);

       if(!users){
            return res.status(404).json({
              success:false,
              message:"users not found"
            });
           }

           if(req.users.name !== undefined){
                users.name = req.users.name;
           }
            if(req.users.email !== undefined){
                users.email = req.users.email;
           }
            if(req.users.password !== undefined){
                users.password = req.users.password;
           }

           await users.save();

           res.status(200).json({
             success:true,
             message:"user partial updated successfully"
         })
   }
       catch(error){
       return res.status(500).json({
         success:false,
         message:error.message
       })
   }
}



const Deleteusers = async(req,res) => {
   try{
         const users = await User.findByIdAndDelete(req.params.id);

       if(!users){
            return res.status(404).json({
              success:false,
              message:"users not found"
            });
           }

           res.status(200).json({
             success:true,
             message:"user delete successfully"
         })
   }
       catch(error){
       return res.status(500).json({
         success:false,
         message:error.message
       })
   }
}


module.exports = {GetUsers, SingleUsers, CreateUsers, PatchUpdates, PutUpdates, Deleteusers}  