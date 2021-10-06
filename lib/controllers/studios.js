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
  // This is ONLY for studios/:id
  // change models to just grab specific info
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id; // we've got this id!
      // just pull studios data we want from studios
      // pull just filmsObject data we want 
      // Pass in as (req.params.id, {selectedStudioInfo, filmsId : [{ id, title }] })
      const studioObj = await Studios.getStudiosById(id);
      console.log('STUDIO OBJECT', studioObj);
      res.send(studioObj);
    } catch(error){
      next(error);
    }
  });
