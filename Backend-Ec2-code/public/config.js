//database config.js
var mysql = require('mysql')
//var app = require('express');
//You can configure any DB here.

//local database config
var db_config = {
   user: 'admin',
   password: 'ad***',
   host: '******************.us-west-2.rds.amazonaws.com', // You can use 'localhost\\instance' to connect to named instance
   database: 'pdemo_database',
   port: 3306
}

var pool;
//app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
// });
function handleDisconnect() {
    pool = mysql.createPool(db_config);
    return pool;
}

pool = handleDisconnect();
module.exports.config = pool;
