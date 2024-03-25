const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');
const toursRouter = express.Router();

// toursRouter.param('id', tourController.checkID);

toursRouter
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

toursRouter.route('/tour-stats').get(tourController.getTourStats);
toursRouter.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

toursRouter
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);

toursRouter
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour,
  );

module.exports = toursRouter;
