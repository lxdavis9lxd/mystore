var express = require('express');
var emp = require('request');

var router = express.Router();
var listx ='';
router.get('/', function(req, res, next) {
   var empreq ='https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam';
   emp(empreq, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
    listx = JSON.parse(body)
    res.render('getemployeeslist', { title: listx.year });
  }
})
  //res.render('getemployeeslist', { title: listx.year  });
  });
  
  module.exports = router;