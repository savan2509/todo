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
  console.log(1);
  const todoId = req.params.todoID;
  console.log(2);
  const value = req.body.Status;
  console.log(3);
      const updateTodo = await Todo.findByIdAndUpdate(todoId, { Status: value }, { new: true});
      console.log(4);
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