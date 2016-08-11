'use strict';

var Http = require('http');
var Express = require('express');
var BodyParser = require('body-parser');
var Swaggerize = require('swaggerize-express');
var Path = require('path');

var App = Express();

var Server = Http.createServer(App);

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
  extended: true
}));

// DON'T TRY THIS AT HOME
const questions = [];
let currentQuestion = 0;

App.all('*', function(req, res, next) {
  req.questions = questions;
  req.getCurrentQuestion = () => {
    currentQuestion += 1;
    return currentQuestion;
  };
  next();
});

App.use(Swaggerize({
  api: Path.resolve('./config/swagger.yaml'),
  handlers: Path.resolve('./handlers')
}));

Server.listen(process.env.PORT || 5000, function () {
  App.swagger.api.host = this.address().address + ':' + this.address().port;
    /* eslint-disable no-console */
  console.log('App running on %s:%d', this.address().address, this.address().port);
    /* eslint-disable no-console */
});
