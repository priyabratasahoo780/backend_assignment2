const mongoose = require('mongoose');

// import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
  email : {
    type:String,
    required:true,
    trim:true,
    unique:true,
    lowercase:true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;


