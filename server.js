#!/usr/bin/env node

/**
 * Module dependencies.
 */
const config = require('./config/config');;
const express = require('express');

const app = express();
module.exports = require('./config/app')(app, config);

app.listen(config.port, () => {
  console.log('Express server listening on port ' + config.port);
});