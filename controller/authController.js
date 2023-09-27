const User = require('../model/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const { promisify } = require('util');

const signup = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = await User.create({name,email,password: hashedPassword,});

    res.status(201).json({
      status: 'success',
      data: newUser,
    });        
  }
);

const login = catchAsync(async(req, res, next) => {

  const {email, password} = req.body;
  if(!email || !password) {
    return next(new AppError('place provide email and password'))
  }

  const user = await User.findOne({ email})
  if (!user) {
    return next(new AppError('Invalid email or password!', 401));
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return next(new AppError('Invalid email or password!', 401));
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.status(500).json({
    status:'success',
    token,
    data: user

  })
})


// protect
const protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );
  }
  const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.userId);
  if (!currentUser) {
    return next(
       new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    );
  }

  req.user = currentUser;
  next();
});
  

 

module.exports = {  
    signup,
    login,
    protect
};  