const express = require('express');
const tourController = require('../controllers/tourController');
const { router } = require('express/lib/application');

const toursRouter = express.Router();

// toursRouter.param('id', tourController.checkID);

toursRouter
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

toursRouter.route('/tour-stats').get(tourController.getTourStats);
toursRouter.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

toursRouter
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

toursRouter
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = toursRouter;
