var express = require('express');
var emp = require('request');
var parseUrl = require('body-parser');
var jsonparse = require('json-parser');
var dburl='';
var dbstring='';
var dbmethod='';
var dbbody ='';
var statusmesg = '';
var initSearch ='';
varempupdt ='';
var rtnejs = ''
const fetch = require('node-fetch');
var router = express.Router();
var functions = require('../functions/db_sign_in');
var dbcallsget = require('../functions/dbCallsget');
var dbcallspost = require('../functions/dbCallsPost');
if ( global.DB_token = 'notoken') {
    // console.log('setting Auth token')
     functions.data.db_sign_in();   
};
//#########################################################
var rtnres =''

// function to log in to the db
 
   async function dbCallsGetv1 (dburl,dbstring,dbmethod,dbbody,rtnejs) { 
     
      console.log('before dbcall',dburl,dbstring,dbmethod,dbbody,rtnejs);
        var empurl = dburl + dbstring;
        var bearer = 'Bearer ' +  global.DB_token;
        const result =  await fetch (empurl,( 
        empurl,{
        method: dbmethod,
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json' }
            //body:dbbody
}))
.then((response) => response.json())
.then((data) => {
   
  global.DB_data = data;
  //console.log('Success 41:',data);
  
  global.DB_data = data;
  rtnResults = data;
  //console.log('golbal:' , global.DB_data);
  //var resultstatus = response.message
  //rtnres = res.render(rtnejs, { resultdata:  data, resultstatus: data.totalCount} )
  //console.log('aft dbcall before exit', rtnResults);
  return  rtnResults;
})
.catch((error) => {
  console.error('Error:', error);
});

};










//################################################################

// Update Employee *******************************          

var rtnres = '';
//console.log('before delete');

//load emplistbyid page
router.get('/empupdt', async (req, res, next) => { rtnres= res.render('empupdt',{ resultdata:  "" , resultstatus: ""})});

// Search function
router.post('/empupdtsearch', async (req, res, next) => {
 // populate the varibles **************************
  console.log('call dbcalls')
    dburl='http://localhost:8084/api/v1/employees/search/';
    dbstring=req.body.empupdtsearch.toString();
    initSearch = req.body.empupdtsearch.toString();
    dbmethod='get';
    dbbody='';
 //***************************************************  

 // Call the get function to quuery the DB, set a two second wait to give the function time to return data
  dbCallsGetv1(dburl,dbstring,dbmethod,dbbody,rtnejs) 
   .then((data) =>  {  
     //   sleep = require('sleep-promise');
    (async () => {
        //console.log("Printed immediately.");
     // await sleep(2000);
      console.log('then 93' ,rtnResults.records); 
      statusmesg = "Total Record Count: " + rtnResults.totalCount
      rtnres= res.render('empupdt', { resultdata:  rtnResults, resultstatus: statusmesg} );
    })
    console.log('then 93' ,rtnResults.records); 
    statusmesg = "Total Record Count: " + rtnResults.totalCount
    rtnres= res.render('empupdt', { resultdata:  rtnResults, resultstatus: statusmesg} );
})
})
 //dbCallsPostv1(dburl,dbstring,dbmethod,dbbody);
    //const sleep = require('sleep-promise');
   // (async () => {
        //console.log("Printed immediately.");
      //  await sleep(2000);
       // console.log("Printed after two seconds.");
      //  console.log('function' ,rtnResults.records);
      //  statusmesg = "Total Record Count: " + rtnResults.totalCount
      //  rtnres= res.render('empupdt', { resultdata:  rtnResults, resultstatus: statusmesg} );
   // })();
 //****************************************************************************** */  
// }); 

 // Update function
router.post('/empupdt', async (req, res, next) => {
  // populate the varibles **************************
   console.log('call dbcalls')
     dburl='http://localhost:8084/api/v1/employees/';
     varempupdt = req.body.employeeNumber
          dbstring=varempupdt.toString();
     console.log('dbstring',dbstring)
     dbmethod='patch';
   dbbody = JSON.stringify({"employeeNumber":req.body.employeeNumber,"lastName":req.body.lastName,"firstName":req.body.firstName,"extension":req.body.extension,"email":req.body.email,"officeCode":req.body.officeCode,"reportsTo":req.body.reportsTo,"jobTitle":req.body.jobTitle})
  //***************************************************  
  console.log('dbbody',dbbody)
  // Call the delete function to delete a record , set a two second wait to give the function time to return data
  dbcallspost.data.dbCallsPost(dburl,dbstring,dbmethod,dbbody);
     var sleep = require('sleep-promise');
     (async () => {
         //console.log("Printed immediately.");
         await sleep(4000);
        // console.log("Printed after two seconds.");
        // console.log('after call dbcalls' ,global.DB_data);
         statusmesg = global.DB_data.message
         //rtnres= res.render('empupdt', { resultdata:  global.DB_data, resultstatus: statusmesg} );
     })();
  //****************************************************************************** */  

  //************************ Refresh page to remove deleted record */
  // Search function
//router.post('/empupdtsearch', async (req, res, next) => {
  // populate the varibles **************************
    console.log('Refresh');
     dburl='http://localhost:8084/api/v1/employees/search/';
     dbstring=initSearch.toString();
     console.log('Refresh dbstring ', dbstring);
     dbmethod='get';
     dbbody='';
     rtnejs = 'empupdt'
  //***************************************************  



 
  // Call the get function to quuery the DB, set a two second wait to give the function time to return data
  
  dbCallsGetv1(dburl,dbstring,dbmethod,dbbody,rtnejs) 
   .then((data) =>  {  
    
                      sleep = require('sleep-promise');
                      (async () => {
                          //console.log("Printed immediately.");
                        await sleep(2000);
                        console.log('then 93' ,rtnResults.records); 
                        statusmesg = "Total Record Count: " + rtnResults.totalCount
                        rtnres= res.render('empupdt', { resultdata:  rtnResults, resultstatus: statusmesg} );
                      })
                 
  })
})
  
  
  
  
  
  

module.exports = router
// End of del employee ***********************

      


 