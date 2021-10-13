const { Router } = require('express');
const review = require('../utils/review-utils.js');
const Review = require('../models/Reviews.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const reviewObj = await Review.insert(review);
      res.send(reviewObj);
    } catch (error) {
      next(error);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const reviewObj = await Review.get();
      res.send(reviewObj);
    } catch (error) {
      next(error);
    }
  });
