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
})

  .get('/', async (req, res, next) => {
    try {
      const reviewerObj = await Reviewer.get(reviewer);
      console.log(reviewerObj, 'REVIEWER OBJ');
      res.send(reviewerObj);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const reviewerObjId = await Reviewer.getById(req.params.id);
      res.send(reviewerObjId);
    } catch (error) {
      next(error);
    }
  });




