var express = require('express');
var emp = require('request');
const fetch = require('node-fetch');
var router = express.Router();
var listx ='';
var holdres = '';







console.log('before');
router.get('/getemployeeslist', async (req, res, next) => {
    const fetch = require('node-fetch');
console.log('hit it');  
var empurl ='http://localhost:8084/api/v1/customers/?pageNo=1&pageSize=100';
var bearer = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjoicm9vdCJ9LCJpYXQiOjE2NjQzMzQ3MDksImV4cCI6MTY2NDM3MDcwOX0.-0wz8v6mkS3p4J5Vimfjoe05iYYgA6EiZ1JI7Da7EKI';
//var holdres = res;
const result = await fetch(myURL,(
  empurl,{
  method: 'GET',
  withCredentials: true,
  credentials: 'include',
  headers: {
      'Authorization': bearer,
      //'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
      'Content-Type': 'application/json'
  }}));
  const responseData =  result.json();
  console.log('darn')
  holdres.render('getemployeeslist', { title: 'test'  } );
}); 
        
       //const responseData =  result.json();
       //console.log(responseData);
       //holdres.render('getemployeeslist', { title: 'test'  } );
       
       
//});
  //.catch(function(err) {
    // handle the error
   //console.log('darn') // })
  //,
 
  //);

  module.exports = router;