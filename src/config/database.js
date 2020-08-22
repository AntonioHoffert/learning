const mongoose = require("mongoose")
module.exports = function(){
const url = "mongodb://localhost/antonioAlertas"
mongoose.connect(url,{useMongoClient:true})
mongoose.connection.on('connected', function () { console.log('Mongoose! Connected at ' + url); }); 
mongoose.connection.on('disconnected', function () { console.log('Mongoose! Disconnected em ' + url); }); 
mongoose.connection.on('error', function (erro) { console.log('Mongoose! Error : ' + erro); }); process.on('SIGINT', function () { 
mongoose.connection.close(function () { console.log('Mongoose! Disconnected by the application'); process.exit(0); }); });
}