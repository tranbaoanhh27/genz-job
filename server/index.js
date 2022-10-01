'use strict';

const express = require('express');

const middleware = require('./middleware');
const controller = require('./controllers');

const app = express();

// load middlewares
middleware(app);

// load controllers
controller(app);

// set port, listen for requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('App listening on port 5000')
 })