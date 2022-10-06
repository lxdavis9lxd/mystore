var express = require('express');
var emp = require('request');
var parseUrl = require('body-parser');
var jsonparse = require('json-parser');
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
let encodeUrl = parseUrl.json({ extended: false });
router.post('/empadd', encodeUrl, (req, res) => {  
    console.log('Form request:', req.body)
    var varBody =  JSON.stringify({
      'employeeNumber': '9283',
      'lastName': req.body.lastName,
      'firstName': req.body.firstName,
      'extension': req.body.extension,
      'lofficeCode': req.body.officeCode,
      'reportsTo': req.body.reportsTo,
      'jobTitle': req.body.jobTitle

}  );
 //varBody = JSON.parse(JSON.stringify( '"employeeNumber":"9902","lastName":"x","firstName":"y","extension":"345","email":"t@qw","officeCode":"1","reportsTo":"1002","jobTitle":"asdfg"'))
    
    console.log("body string",req.body.lastName);
    
    const fetch = require('node-fetch');
       // console.log('emp post to db',global.DB_token);  
        var empurl ='http://localhost:8084/api/v1/employees';
        var bearer = 'Bearer ' +  global.DB_token;
        //var holdres = res;
        const result =  fetch(empurl,(
        empurl,{
        method: 'post',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            //'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            'Content-Type': 'application/json' },
        body: JSON.stringify({"employeeNumber":"9784","lastName":"x","firstName":"y","extension":"345","email":"t@qw","officeCode":"1","reportsTo":"1002","jobTitle":"asdfg"})
        }))
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            //global.DB_token = data.access_token;
            console.log('golbal:',  global.DB_token);
            holdres= res.render('empadd', { resultdata:  data} )
          })
          .catch((error) => {
            console.error('Error:', error);
          });

   //res.sendStatus(200)
  });
  
 // holdres= res.render('empadd' );

        module.exports = router


 