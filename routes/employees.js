var express = require('express');
var emp = require('request');
var parseUrl = require('body-parser');
var jsonparse = require('json-parser');
const fetch = require('node-fetch');
var router = express.Router();
var functions = require('../functions/db_sign_in');
if ( global.DB_token = 'notoken') {
     console.log('setting Auth token')
     functions.data.db_sign_in();   
};


// list all empolyees ******************************* 
var rtnres = '';
//console.log('before');
/*
router.get('/emplistall', async (req, res, next) => {
   // const fetch = require('node-fetch');
        console.log('hit it',global.DB_token);  
        var empurl ='http://global.API_IP:8084/api/v1/employees/';
        //var empurl ='http://global.API_IP:8084/api/v1/customers/?pageNo=1&pageSize=100';
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
  console.log('Success:', data);
  //global.DB_token = data.access_token;
  console.log('golbal:',  global.DB_token);
  rtnres= res.render('emplistall', { resultdata:  data} )
})
.catch((error) => {
  console.error('Error:', error);
});
        
     
}); 
*/
// End of list employee ***********************

// list all by id empolyees ******************************* 
var rtnres = '';
//console.log('before byid');
//load emplistbyid page
router.get('/emplistbyid', async (req, res, next) => { rtnres= res.render('emplistbyid',{ resultdata:  ""})});
// get emplistbyid
router.post('/emplistbyid', async (req, res, next) => {
   
  const fetch = require('node-fetch');
        varEmpNbr = req.body.employeeNumber
        //console.log('by ID',varEmpNbr.toString());  
        
        var empurl ='http://global.API_IP:8084/api/v1/employees/' + varEmpNbr.toString();
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
  console.log('Success:', data);
  console.log('golbal:',  global.DB_token);
  rtnres= res.render('emplistbyid', { resultdata:  data} )
})
.catch((error) => {
  console.error('Error:', error);
});
        
     
}); 
// End List employee by id ***********************

// empolyees Search******************************* 
var rtnres = '';
//console.log('before byid');
//load emplistbyid page
//router.get('/empsearch', async (req, res, next) => { rtnres= res.render('empsearch',{ resultdata:  ""})});
// get emplistbyid
/*
router.post('/empsearch', async (req, res, next) => {
   
  const fetch = require('node-fetch');
        varempsearch = req.body.empsearch
        console.log('search',req.body.empsearch);  
        
        var empurl ='http://global.API_IP:8084/api/v1/employees/search/' + varempsearch.toString();
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
  console.log('Success:', data);
  console.log('golbal:',  global.DB_token);
  rtnres= res.render('empsearch', { resultdata:  data} )
})
.catch((error) => {
  console.error('Error:', error);
});
        
     
}); 
*/
// End Search  Employee *******************************  


// Add Employee *******************************          
router.get('/empadd', async (req, res, next) => { rtnres= res.render('empadd' ) });
let encodeUrladd = parseUrl.json({ extended: false });
/*
router.post('/empadd', encodeUrladd, (req, res) => {  
    console.log('Form request:', req.body)
     
    const fetch = require('node-fetch');
       // console.log('emp post to db',global.DB_token);  
        var empurl ='http://global.API_IP:8084/api/v1/employees';
        var bearer = 'Bearer ' +  global.DB_token;
        const result =  fetch(empurl,(
        empurl,{
        method: 'post',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json' },
        body: JSON.stringify({"employeeNumber":req.body.employeeNumber,"lastName":req.body.lastName,"firstName":req.body.firstName,"extension":req.body.extension,"email":req.body.email,"officeCode":req.body.officeCode,"reportsTo":req.body.reportsTo,"jobTitle":req.body.jobTitle})
        }))
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            console.log('golbal:',  global.DB_token);
            rtnres= res.render('empadd', { resultdata:  "test"} )
          })
          .catch((error) => {
            console.error('Error:', error);
          });

   //res.sendStatus(200)
  });
   /*
  // End of add employee ***********************

  // update Employee *******************************          
router.get('/empupdt', async (req, res, next) => { rtnres= res.render('empadd' ) });
let encodeUrlupdt = parseUrl.json({ extended: false });
router.post('/empadd', encodeUrlupdt, (req, res) => {  
    console.log('Form request:', req.body)
    /*
    var varBody =  JSON.stringify({
      'employeeNumber': '9283',
      'lastName': req.body.lastName,
      'firstName': req.body.firstName,
      'extension': req.body.extension,
      'lofficeCode': req.body.officeCode,
      'reportsTo': req.body.reportsTo,
      'jobTitle': req.body.jobTitle

}  );

    
    const fetch = require('node-fetch');
       // console.log('emp post to db',global.DB_token);  
        var empurl ='http://global.API_IP:8084/api/v1/employees';
        var bearer = 'Bearer ' +  global.DB_token;
        const result =  fetch(empurl,(
        empurl,{
        method: 'post',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json' },
        body: JSON.stringify({"employeeNumber":req.body.employeeNumber,"lastName":req.body.lastName,"firstName":req.body.firstName,"extension":req.body.extension,"email":req.body.email,"officeCode":req.body.officeCode,"reportsTo":req.body.reportsTo,"jobTitle":req.body.jobTitle})
        }))
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            console.log('golbal:',  global.DB_token);
            rtnres= res.render('empadd', { resultdata:  data} )
          })
          .catch((error) => {
            console.error('Error:', error);
          });

   //res.sendStatus(200)
  });
  */
  // End of updt employee ***********************


// del Employee *******************************          
/*
var rtnres = '';
console.log('before byid');
//load emplistbyid page
//router.get('/empdel', async (req, res, next) => { rtnres= res.render('empdel',{ resultdata:  ""})});
// get emplistbyid
//router.post('/empdelsearch', async (req, res, next) => {
   
 /* const fetch = require('node-fetch');
        varempsearch = req.body.empdelsearch
        console.log('search del ',req.body.empdelsearch);  
        
        var empurl ='http://global.API_IP:8084/api/v1/employees/search/' + varempsearch.toString();
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
  console.log('Success:', data);
  console.log('golbal:',  global.DB_token);
  rtnres= res.render('empdel', { resultdata:  data} )
})
.catch((error) => {
  console.error('Error:', error);
})});
 
router.get('/empdel', async (req, res, next) => {
  console.log('here in the start of dele', req.method); 
  /*
  const fetch = require('node-fetch');
        varempdel = req.body.employeeNumber
        console.log('del ',req.body.employeeNumber);  
        
        var empurl ='http://global.API_IP:8084/api/v1/employees/' + varempdel.toString();
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
  console.log('Success:', data.message);
  console.log('golbal:',  global.DB_token);
  rtnres= res.render('empdel', { resultdata:  data} )
})
.catch((error) => {
  console.error('Error:', error);
});  
// redispaly list 
//const fetch = require('node-fetch');
        //varempsearch = req.body.empdelsearch
        //console.log('by ID',req.body.empdelsearch);  
/*        
        var empurl ='http://global.API_IP:8084/api/v1/employees/search/' + varempsearch.toString();
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
  console.log('Success:', data);
  console.log('golbal:',  global.DB_token);
 // rtnres= res.render('empdelrecord', { resultdata:  data} )
})
.catch((error) => {
  console.error('Error:', error);
});

}); 
*/
// End of del employee ***********************

        module.exports = router


 