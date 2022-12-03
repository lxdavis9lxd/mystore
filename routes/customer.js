//decalare variables and Functions 
var express = require('express');
var emp = require('request');
const fetch = require('node-fetch');
var router = express.Router();
var retresposne = '';
var functions = require('../functions/db_sign_in');
if ( global.DB_token === 'notoken') {
     //console.log('setting Auth token')
     functions.data.db_sign_in();   
};
//console.log('before');
// calls from Web Pages, Gets and Posts 

//Customer GETS
//get list of Customer (GetAll)

router.get('/getcustlist', async (req, res, next) => {
    const fetch = require('node-fetch');
       // console.log('hit it');  
        var url ='http://' + global.db_token_ip + '/api/v1/customers/?pageNo=1&pageSize=100';
        var bearer = 'Bearer ' +  global.DB_token;  //bearer token to use to connect to the database
        const result = await fetch(url,(
        url,{
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json' }
}))
.then((response) => response.json())
.then((data) => {  // if call is successful
  console.log('Success: list');
  console.log('golbal:',  global.DB_token);
  retresposne = res.render('getcustlist', { resultdata:  data} )
})
.catch((error) => { // if call returns any status other than a 200 level status
  console.error('Error:', error);
});
          
});             
         
   //get list of Customer By id (GetById)
router.get('/getcustlistbyid', async (req, res, next) => {
  //console.log('r',router.all);  
  const fetch = require('node-fetch');

 // console.log('hit it getcustlistbyid'); 
  //var url ='http://108.65.159.229:8084/api/v1/customers/?pageNo=1&pageSize=5'; 
  var url ='http://' + global.db_token_ip + '/api/v1/customers/103';
 
  var bearer = 'Bearer ' +  global.DB_token;  //bearer token to use to connect to the database
  const result = await fetch(url,(
  url,{
  method: 'GET',
  withCredentials: true,
  credentials: 'include',
  headers: {
      'Authorization': bearer,
      'Content-Type': 'application/json' }
}))
.then((response) => response.json())
.then((data) => {  // if call is successful
console.log('Success:byid', data);
//console.log('golbal:',  global.DB_token);
retresposne = res.render('getcustlistbyid', { resultdata:  data} )
})
.catch((error) => { // if call returns any status other than a 200 level status

console.error('Error:', error);
});
    
});          
           
      
        module.exports = router


 