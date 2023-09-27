const express = require("express")
const userRouter = require('./router/useRoutes');
const todoRouter = require('./router/todoRoutes');

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/Todo', todoRouter);


module.exports = app;   
