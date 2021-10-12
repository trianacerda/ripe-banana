const { Router } = require('express');
const actor = require('../utils/actor-utils.js');
const Actors = require('../models/Actors.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const actorObj = await Actors.insert(actor);
      res.send(actorObj);
    } catch (error) {
      next(error);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const actorObj = await Actors.get(actor);
      res.send(actorObj);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const actorObjId = await Actors.getById(req.params.id);
      res.send(actorObjId);
    } catch (error) {
      next(error);
    }
  });
