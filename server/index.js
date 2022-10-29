'use strict';

const express = require('express');
const middleware = require('./middlewares');
const controller = require('./controllers');

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// load middlewares
middleware(app);

// load controllers
controller(app);

// set port, listen for requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('App listening on port 5000')
 })