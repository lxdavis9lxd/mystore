var express = require('express');
var emp = require('request');
var parseUrl = require('body-parser')
const fetch = require('node-fetch');
var router = express.Router();
var functions = require('../functions/db_sign_in');
//if ( global.DB_token = 'notoken') {
     console.log('setting Auth token')
     functions.data.db_sign_in();   
//};
var holdres = '';
console.log('before');
router.get('/employeeslistall', async (req, res, next) => {
    const fetch = require('node-fetch');
        console.log('hit it',global.DB_token);  
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
  console.log('golbal:',  global.DB_token);
  holdres= res.render('getemployeeslist', { resultdata:  data} )
})
.catch((error) => {
  console.error('Error:', error);
});
        
     
});             
            
router.get('/empadd', async (req, res, next) => { holdres= res.render('empadd' ) });
let encodeUrl = parseUrl.urlencoded({ extended: false });
router.post('/empadd', encodeUrl, (req, res) => {  
    console.log('Form request:', req.body)
    res.sendStatus(200)
  });
  
 // holdres= res.render('empadd' );

        module.exports = router


 