const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/studios', require('../lib/controllers/studios'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
