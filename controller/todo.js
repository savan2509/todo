const Todo = require('../model/todomodel');
const catchAsync = require('../utils/catchAsync');

const createTodo = catchAsync(async(req, res,) => {
  const value ={name:req.body.name, status:req.body.status}
    const newTodo = await Todo.create(value);
    res.status(201).json({
        status: 'success',
        data: newTodo
      });
})
 
const updateTodo = catchAsync(async (req, res) => {
    const todoId = req.params.todoID;
    const value = req.body.Status
        const updateTodo = await Todo.findByIdAndUpdate(todoId, { Status: value }, { new: true});
         res.status(200).json({
            status: 'success',
            data: updateTodo, 
          });    
  });
  
const deleteTodo = catchAsync(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.todoId);
    res.status(200).json({
      status: 'success',
      message: 'Data Delete successful',
    });
  });

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo
}