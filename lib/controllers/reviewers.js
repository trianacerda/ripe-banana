const { Router } = require('express');
const reviewer = require('../utils/reviewer-utils.js');
const Reviewer = require('../models/Reviewer.js');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const reviewerObj = await Reviewer.insert(reviewer);
    res.send(reviewerObj);
  } catch (error) {
    next(error);
  }
});
