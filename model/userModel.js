const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please tell us your name!']
    },
 
    email: {
      type :String ,
      unique:[ true,'Email already exists'],        
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'], 
    },
    Status: {
        type: Boolean,
        default:false
      },
  });

  const User = mongoose.model('User', userSchema);

module.exports = User;