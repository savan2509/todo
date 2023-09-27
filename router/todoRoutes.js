const express = require('express');

const router = express.Router();

const Todo = require('../controller/todo');


router.post('/createTodo', Todo.createTodo);
router.patch('/:todoID', Todo.updateTodo);
router.delete('/:todoID', Todo.deleteTodo);



module.exports = router;

