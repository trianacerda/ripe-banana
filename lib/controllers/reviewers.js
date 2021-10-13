const { Router } = require('express');
const reviewer = require('../utils/reviewer-utils.js');
const Reviewer = require('../models/Reviewer.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
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
  })
  .put('/:id', async (req, res, next) => {
    try {
      const reviewerObjId = await Reviewer.update(req.params.id, req.body);
      res.send(reviewerObjId);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const reviewerObjId = await Reviewer.delete(req.params.id);
      res.send(reviewerObjId);
    } catch (error) {
      next(error);
    }
  });
