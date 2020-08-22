const http = require("http")
const database = require("./config/database.js")
const express = require("./config/express.js")
database()
const app = express()

const server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Express is running on port ' + app.get('port'));
  });
  
  module.exports = server;