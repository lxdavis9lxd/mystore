var express = require('express');
var emp = require('request');
var parseUrl = require('body-parser');
var jsonparse = require('json-parser');
const fetch = require('node-fetch');
var router = express.Router();
var functions = require('../functions/db_sign_in');
var  varmessage='';
if ( global.DB_token = 'notoken') {
     console.log('setting Auth token')
     functions.data.db_sign_in();   
};



// del Employee *******************************          

var rtnres = '';
console.log('before byid');
//load emplistbyid page
router.get('/empdel', async (req, res, next) => { rtnres= res.render('empdel',{ resultdata:  "" , resultstatus: ""})});
// get emplistbyid
router.post('/empdelsearch', async (req, res, next) => {
   
 const fetch = require('node-fetch');
        varempsearch = req.body.empdelsearch
        console.log('search del ',req.body.empdelsearch);  
        
        var empurl ='http://localhost:8084/api/v1/employees/search/' + varempsearch.toString();
        var bearer = 'Bearer ' +  global.DB_token;
        const result = await fetch(empurl,(
        empurl,{
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json' }
}))
.then((response) => response.json())
.then((data) => {
  console.log('Success 41:', data);
  //console.log('golbal:',  global.DB_token);
  //var resultstatus = response.message
  rtnres= res.render('empdel', { resultdata:  data, resultstatus: data.totalCount} )
})
.catch((error) => {
  console.error('Error:', error);
})});
  
router.post('/empdel', async (req, res, next) => {
  console.log('here in the start of dele', req.method); 
  
  const fetch = require('node-fetch');
        varempdel = req.body.employeeNumber
        console.log('del ',req.body.employeeNumber);  
        
        var empurl ='http://localhost:8084/api/v1/employees/' + varempdel.toString();
        var bearer = 'Bearer ' +  global.DB_token;
        const result =  fetch(empurl,(
        empurl,{
        method: 'delete',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json' }
}))
.then((response) => response.json())
.then((data) => {
  varmessage = data.message.toString();
  //console.log('Success 70:', data.message);
  console.log('73 message :',  varmessage);
 // rtnres= res.render('empdel', { resultdata:  data, resultstatus: ""} )
})
.catch((error) => {
  console.error('Error:', error);
});  

       
        var empurl ='http://localhost:8084/api/v1/employees/search/' + varempsearch.toString();
        var bearer = 'Bearer ' +  global.DB_token;
        const resultresearch = await fetch(empurl,(
        empurl,{
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json' }
}))
.then((response) => response.json())
.then((data) => {
  console.log('Success95:', data);
  console.log('98 message:',  varmessage);
 rtnres= res.render('empdel', { resultdata:  data, resultstatus: varmessage} )
})
.catch((error) => {
  console.error('Error:', error);
});

}); 

// End of del employee ***********************

        module.exports = router


 