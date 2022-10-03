var express = require('express');
var emp = require('request');
const fetch = require('node-fetch');
var router = express.Router();
var cred ={
  "username":"root",
  "password":"rockwell"
       }



/* GET home page. */
//router.get('/', function(req, res, next) {     //call from index.ejs
console.log('before');
router.get('/', async (req, res, next) => {   // call restAPI to get Bearer Token for Database Login
    const fetch = require('node-fetch');
        console.log('hit it');  
        var dbtoken ='http://localhost:8084/api/v1/token';
        //var bearer = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjoicm9vdCJ9LCJpYXQiOjE2NjQ0MTIxNDgsImV4cCI6MTY2NDQ0ODE0OH0.kSIhD1wreJ32HdhFcBdBwyWZ_47hl8mvc0j1JFDsnXY';
        //var holdres = res;
        const result = await fetch(dbtoken,(
        dbtoken,{
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        //withCredentials: false,
        //credentials: 'include',
        headers: {
          //  'Authorization': bearer,
            //'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            'Content-Type': 'application/json' },

            body:JSON.stringify(cred)
}))
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
  global.DB_token = data.access_token;
  console.log('golbal:',  global.DB_token);
})
.catch((error) => {
  console.error('Error:', error);
});
        
  res.render('index', { title: 'Express' });
});  
  

module.exports = router;
