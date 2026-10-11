const mongoose = require('mongoose');

const ConnectDB = async() => {
  try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected successfully");
  }
  catch(error){
      console.log("mongodb not connected", error.message);
  }
}

module.exports = ConnectDB;