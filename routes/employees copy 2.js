var express = require('express');
var emp = require('request');

var router = express.Router();
var listx ='';

//router.get('/', function(req, res, next) {
//console.log(req);  
var empurl ='http://localhost:8084/api/v1/customers/?pageNo=1&pageSize=100';
var bearer = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjoicm9vdCJ9LCJpYXQiOjE2NjQzMzQ3MDksImV4cCI6MTY2NDM3MDcwOX0.-0wz8v6mkS3p4J5Vimfjoe05iYYgA6EiZ1JI7Da7EKI';
fetch(empurl, {
    method: 'GET',
    withCredentials: true,
    credentials: 'include',
    headers: {
        'Authorization': bearer,
       // 'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
        'Content-Type': 'application/json'
    }
})
  .then(function(res) {
    // handle the response
    console.log(res.json); // Print the google web page.
    listx = res.json;
   //res.render('getemployeeslist', { title: listx.totalCount}
  })
  .catch(function(err) {
    // handle the error
    console.log('darn')  })

//});
console.log('here')
  module.exports = router;