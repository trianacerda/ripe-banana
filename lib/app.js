const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/studios', require('./controllers/studios'));
app.use('/api/films', require('./controllers/films'));
app.use('/api/actors', require('./controllers/actors'));
app.use('/api/reviews', require('./controllers/reviews'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
