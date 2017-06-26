var MongoClient = require('mongodb').MongoClient, 
    format = require('util').format;
require('dotenv').config();

exports.connect = function(req, res, next){
  var dbUrl = 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PWD+'@'+process.env.DB_HOST+':'+process.env.DB_PORT+'/'+process.env.DB_NAME
  MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;
      req.db = db;
      next();
  });
}
