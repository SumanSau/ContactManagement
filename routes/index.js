'use strict';
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
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.get('/addContact', function(req, res, next) {
    
    
       db.collection('contactDetails').insert({
        "fname" : req.query.fname,
        "lname" : req.query.lname,
        "city" : req.query.city,
        "mobile" : req.query.mobile,
        "telephone" : req.query.telephone,
        "emailID" : req.query.emailID

       });
       //console.log(res.json(result));
    /*db.collection('contactDetails').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      else{
        res.json(result);        
      }
    });*/
  });

});
/* GET home page. */
module.exports = router;
