const express = require('express');

const router = express.Router();

const Todo = require('../controller/todo');
const authController  = require('../controller/authController');


router.post('/createTodo/:userID', authController.protect, Todo.createTodo);
router.patch('/:todoID', authController.protect, Todo.updateTodo);
router.delete('/:todoID', authController.protect, Todo.deleteTodo);

router.get('/me',authController.protect, Todo.Me)
router.get('/:todoID', Todo.oneTodo);


module.exports = router;

