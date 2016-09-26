var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url ='mongodb://localhost:27017/suman';

MongoClient.connect(url, function(err, db) 
{
  if (err) {
    throw err;
  }
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.get('/addContact', function(req, res, next) {
    db.collection('users').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      else{
        res.json(result);        
      }
    });
  });

});
/* GET home page. */
module.exports = router;
