var express = require('express');
// var load = require('express-load');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var cors = require('cors');
var alertRoutes = require("../api/routes/alerts.js")
module.exports = function () {
  var app = express();
console.log(alertRoutes)
  app.set('port', 3000);
  app.use("/v1", alertRoutes)
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(morgan('dev'));
  app.use(cors());

  return app;
};