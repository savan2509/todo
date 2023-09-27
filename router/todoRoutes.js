const express = require('express');

const router = express.Router();

const Todo = require('../controller/todo');
const authController  = require('../controller/authController');


router.post('/createTodo', Todo.createTodo);
router.patch('/:todoID', authController.protect, Todo.updateTodo);
router.delete('/:todoID', Todo.deleteTodo);



module.exports = router;

