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
    dbcallsget.data.dbCallsGet(dburl,dbstring,dbmethod,dbbody,rtnejs);
    //dbCallsPostv1(dburl,dbstring,dbmethod,dbbody);
    const sleep = require('sleep-promise');
    (async () => {
        //console.log("Printed immediately.");
        await sleep(2000);
       // console.log("Printed after two seconds.");
       // console.log('after call dbcalls' ,global.DB_data);
        statusmesg = "Total Record Count: " + global.DB_data.totalCount
        rtnres= res.render('empupdt', { resultdata:  global.DB_data, resultstatus: statusmesg} );
    })();
 //****************************************************************************** */  
 });

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
   await dbcallsget.data.dbCallsGet(dburl,dbstring,dbmethod,dbbody,rtnejs);
   
  // console.log ('x', x);
      sleep = require('sleep-promise');
     (async () => {
         //console.log("Printed immediately.");
         await sleep(8000);
        // console.log("Printed after two seconds.");
       //  console.log('after call dbcalls' ,statusmesg);
       // if( totalCount= 'Resource deleted') {
      //        console.log ('record deleted',global.DB_data);
      //        statusmesg = "Record Deleted ";
      //        rtnres= res.render('empupdt', { resultdata:  global.DB_data, resultstatus: statusmesg} );
       // }
     //   else {
              statusmesg = "Updated";
             // console.log('Updated',data  );
              console.log ('xx', dbcallsget.data.dbCallsGet.DataToReturn);
              //rtnres= res.render('empupdt', { resultdata: global.DB_data, resultstatus: statusmesg} )

       // };
     
     })();
  //****************************************************************************** */  
});

module.exports = router
// End of del employee ***********************

      


 