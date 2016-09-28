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
  

  router.get('/addContact', function(req, res, next) {
    
    
       db.collection('contactDetails').insert(
       {
            "fname" : req.query.fname,
            "lname" : req.query.lname,
            "city" : req.query.city,
            "mobile" : req.query.mobile,
            "telephone" : req.query.telephone,
            "emailID" : req.query.emailID

       });
       
  });
  router.get('/updateContactEmail', function(req, res, next) 
        {
            cosole.log(req.query.emailID);
            console.log("Server Side");
             db.collection('contactDetails').find({"emailID" : req.query.emailID}).pretty().toArray(function(err, result) 
             {
               if (err) 
                 {
                   throw err;
                 }
               else
                 {
                     res.json(result);  
                     alert("Contact Updated Successfully");

                }

             });
          });
  router.get('/updateContactMobile', function(req, res, next) 
        {
            cosole.log(req.query.mobile);
            console.log("Server Side");
             db.collection('contactDetails').find({"mobile" : req.query.mobile}).pretty().toArray(function(err, result) 
             {
               if (err) 
                 {
                   throw err;
                 }
               else
                 {
                     res.json(result); 
                     alert("Contact Updated Successfully"); 
                           
                }

             });
          });
  router.get('/deleteContactEmail', function(req, res, next) 
        {
            cosole.log(req.query.emailID);
            console.log("Server Side");
             db.collection('contactDetails').remove({"emailID" : req.query.emailID}).toArray(function(err, result) 
             {
               if (err) 
                 {
                   throw err;
                 }
               else
                 {
                     res.json(result); 
                     alert("Contact Deleted Successfully"); 
                           
                }

             });
          });
  router.get('/deleteContactMobile', function(req, res, next) 
        {
            cosole.log(req.query.emailID);
            console.log("Server Side");
             db.collection('contactDetails').remove({"mobile" : req.query.mobile}).toArray(function(err, result) 
             {
               if (err) 
                 {
                  alert(" There were some error in deleting contact!!");
                   throw err;

                 }
               else
                 {
                     res.json(result); 
                     alert("Contact Deleted Successfully"); 
                           
                }

             });
          });
  router.get('/getContactDetails', function(req, res, next) 
        {
            cosole.log(req.query.emailID);
            console.log("Server Side");
             db.collection('contactDetails').find().pretty().toArray(function(err, result) 
             {
               if (err) 
                 {
                   throw err;
                 }
               else
                 {
                     res.json(result);  
                           
                }

             });
          });

});
/* GET home page. */
module.exports = router;
