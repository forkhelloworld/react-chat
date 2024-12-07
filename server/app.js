const express = require('express');
const apiRouter = require('./routes/apiRouter');
const cors = require('cors');
const errorHandler = require('./errorHandler')

const bodyParser = express.json();

const app = express();

app.use(cors());
app.use(bodyParser);
app.use('/api', apiRouter);
app.use(errorHandler);


module.exports = app;
