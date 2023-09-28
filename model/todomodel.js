const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please tell us your name!']
    },
    Status: {
      type: String,
      enum: ['pending','completed'],
      default: 'pending'
    },
    userID: {
      type : String ,
    }
    });


  module.exports =  mongoose.model('Todo', Todo);
  