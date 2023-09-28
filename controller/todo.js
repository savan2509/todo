const Todo = require('../model/todomodel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const createTodo = catchAsync(async(req, res,) => {
  const userID = req.user._id;
  const value ={name:req.body.name, status:req.body.status, userID }
    const newTodo = await Todo.create(value);
    res.status(201).json({
        status: 'success',
        data: newTodo
      });
});
 
const updateTodo = catchAsync(async (req, res) => {
  const todoId = req.params.todoID;
  const value = req.body.Status;

  if(!todoId){
    return next(new AppError('Please provide a valid ID!'));
  }
  const updateTodo = await Todo.findOneAndUpdate({_id:todoId,userID:req.user._id}, { Status: value }, { new: true});
  if(!todoId){
    return next(new AppError('data not found'))
  }
  res.status(200).json({
        status: 'success',
               data: updateTodo, 
        });    
});
  


const deleteTodo = catchAsync(async (req, res, next) => {
  const todoId = req.params.todoID;
  if (!todoId) {
    return next(new AppError('Todo ID not provided'));
  }
  const deletedTodo = await Todo.findOneAndDelete({ _id: todoId, userID: req.user._id });
  if (!deletedTodo) {
    return next(new AppError('Todo not found')); 
  }

  res.status(200).json({
    status: 'success',
    message: 'Data Delete successful',
  });
});
  
  
  const Me = catchAsync(async(req, res) => {
    const myTODO = await Todo.find({userID:req.user._id}); 
    res.status(200).json({
      status:'success'  ,
      data: myTODO,
  });
  });

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    Me
}