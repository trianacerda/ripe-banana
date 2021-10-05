const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/studios', require('../lib/controllers/studios'));

app.use(require('./middleware/not-found.js'));
app.use(require('./middleware/error.js'));

module.exports = app;
