const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const usersRouter = express.Router();

usersRouter.post('/signup', authController.signup);

usersRouter.post('/login', authController.login);

usersRouter.post('/forgotPassword', authController.forgotPassword);

usersRouter.patch('/resetPassword/:token', authController.resetPassword);

usersRouter.use(authController.protect);

usersRouter.patch('/updateMyPassword', authController.updatePassword);

usersRouter.get('/me', userController.getMe, userController.getUser);

usersRouter.patch('/updateMe', userController.updateMe);

usersRouter.delete('/deleteMe', userController.deleteMe);

usersRouter.use(authController.restrictTo('admin'));

usersRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

usersRouter
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = usersRouter;
