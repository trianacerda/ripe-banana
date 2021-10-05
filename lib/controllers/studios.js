const { Router } = require('express');
const Studios = require('../models/Studios');
const studio = require('../utils/studios-utils');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const studioObj = await Studios.insert(studio);
      res.send(studioObj);
    } catch (error) {
      next(error);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const studioObj = await Studios.getStudios(studio);
      res.send(studioObj);
    } catch (error) {
      next(error);
    }

  })
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const studioObj = await Studios.getStudiosById(id);
      res.send(studioObj);
    } catch(error){
      next(error);
    }
  });
