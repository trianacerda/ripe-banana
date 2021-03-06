const { Router } = require('express');
const films = require('../utils/films-utils.js');
const Films = require('../models/Films.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const filmObj = await Films.insert(films);
      res.send(filmObj);
    } catch (error) {
      next(error);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const filmObj = await Films.getFilms();
      res.send(filmObj);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try{
      const id = req.params.id;
      const filmObj = await Films.getFilmById(id);
      res.send(filmObj);
    }catch(err){
      next(err);
    }
  });
