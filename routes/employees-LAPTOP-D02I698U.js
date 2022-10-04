var express = require('express');
var myParser = require("body-parser");
var emp = require('request');
const fetch = require('node-fetch');
var router = express.Router();
var functions = require('../functions/db_sign_in');
//if ( global.DB_token = 'notoken') {
     console.log('setting Auth token')
     functions.data.db_sign_in();   
//};
var holdres = '';
/*
console.log('employee before');
router.get('/', async (req, res, next) => {
    const fetch = require('node-fetch');
        console.log('emp list all',global.DB_token);  
        var empurl ='http://localhost:8084/api/v1/employees/';
        //var empurl ='http://localhost:8084/api/v1/customers/?pageNo=1&pageSize=100';
        var bearer = 'Bearer ' +  global.DB_token;
        //var holdres = res;
        const result = await fetch(empurl,(
        empurl,{
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            //'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            'Content-Type': 'application/json' }
}))
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
  //global.DB_token = data.access_token;
  //console.log('golbal:',  global.DB_token);
  holdres= res.render('getemployeeslist', { resultdata:  data} )
})
.catch((error) => {
  console.error('Error:', error);
});




        
});             
 */


console.log ('before empadd');  
router.get('/', async (req, res, next) => {
  console.log ('empadd');
  holdres= res.render('empadd')
 });

router.post("/empadd", function(request, response) {
  router.use(myParser.json({extended : true}));
  console.log(request.body); //This prints the JSON document received (if it is a JSON document)
});
        module.exports = router


 