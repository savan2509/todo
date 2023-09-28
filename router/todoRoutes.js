const express = require('express');

const router = express.Router();

const Todo = require('../controller/todo');
const authController  = require('../controller/authController');


router.get('/ME', authController.protect, Todo.Me);
router.post('/createTodo', authController.protect, Todo.createTodo);
router.patch('/:todoID', authController.protect, Todo.updateTodo);
router.delete('/:todoID', authController.protect, Todo.deleteTodo);



module.exports = router;

