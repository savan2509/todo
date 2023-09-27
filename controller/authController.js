const User = require('../model/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signup = catchAsync(async(req, res) => { 
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password:req.body.password
  })
  res.status(500).json({
    status: "success",
    data: newUser
  })
})

const login = catchAsync(async(req, res, next) => {

  const {email, password} = req.body;
  if(!email || !password) {
    return next(new AppError('place provide email and password, 400'))
  }

  const user = await User.findOne({ email})
  if (!user) {
    return next(new AppError('Invalid email or password!', 401));
  }

  res.status(500).json({
    status:'success',
    data:user,
  })
})

module.exports = {  
    signup,
    login
};  