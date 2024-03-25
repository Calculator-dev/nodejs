const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const usersRouter = express.Router();

usersRouter.post('/signup', authController.signup);

usersRouter.post('/login', authController.login);

usersRouter.post('/forgotPassword', authController.forgotPassword);

usersRouter.patch('/resetPassword/:token', authController.resetPassword);

usersRouter.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword,
);

usersRouter.patch('/updateMe', authController.protect, userController.updateMe);

usersRouter.delete(
  '/deleteMe',
  authController.protect,
  userController.deleteMe,
);

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
