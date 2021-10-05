const { Router } = require('express');
const Studios = require('../models/Studios');
const studio = require('../utils/studios-utils');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const studioObj = await Studios.insert(studio);
    res.send(studioObj);
  } catch (error) {
    next(error);
  }
});
