const { Router } = require('express');
const Studios = require('../models/Studios.js');
const studio = require('../utils/studios-utils.js');
const film = require('../utils/films-utils.js');

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
      // we've got this id!
      // just pull studios data we want from studios
      // pull just filmsObject data we want
      // Pass in as (req.params.id, {selectedStudioInfo, filmsId : [{ id, title }] })
      // const filmMap = film.map((item) async =>  {
      //   item.title
      // //   await
      // // })
      const singleStudio = await Studios.getSingleStudio(req.params.id);
      // console.log('STUDIO OBJECT', studioObjById);
      res.send(singleStudio);
    } catch (error) {
      next(error);
    }
  });
