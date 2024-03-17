const express = require('express');
const fs = require('fs');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const morgan = require('morgan');
const toursRouter = require('./routes/tourRoutes');
const usersRouter = require('./routes/userRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
