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
  });
