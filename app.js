const express = require("express")
const userRouter = require('./router/useRoutes');
const todoRouter = require('./router/todoRoutes');
const AppError = require('./utils/appError');
const globleErrorHandling = require('./controller/globleErrorHandling')

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/Todo', todoRouter);


app.all('*', (req, res, next) => {
    const err = new AppError(`can't find ${req.originalUrl} on the server`)
    next(err);
})

app.use(globleErrorHandling)

module.exports = app;   
