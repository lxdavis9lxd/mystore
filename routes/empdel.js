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
varempdel ='';
const fetch = require('node-fetch');
var router = express.Router();
var functions = require('../functions/db_sign_in');
var dbcallsget = require('../functions/dbCallsget');
var dbcallspost = require('../functions/dbCallsPost');
if ( global.DB_token === 'notoken') {
     //console.log('setting Auth token')
     functions.data.db_sign_in();   
};



// del Employee *******************************          

var rtnres = '';
//console.log('before delete');

//load emplistbyid page
router.get('/empdel', async (req, res, next) => { rtnres= res.render('empdel',{ resultdata:  "" , resultstatus: ""})});

// Search function
router.post('/empdelsearch', async (req, res, next) => {
 // populate the varibles **************************
  console.log('call dbcalls')
   dburl='http://' + global.db_token_ip + '/api/v1/employees/search/';
    dbstring=req.body.empdelsearch.toString();
    initSearch = req.body.empdelsearch.toString();
    dbmethod='get';
    dbbody='';
 //***************************************************  

 // Call the get function to quuery the DB, set a two second wait to give the function time to return data
 dbcallsget.data.dbCallsGet(dburl,dbstring,dbmethod,dbbody);
    const sleep = require('sleep-promise');
    (async () => {
        //console.log("Printed immediately.");
        await sleep(2000);
       // console.log("Printed after two seconds.");
       // console.log('after call dbcalls' ,global.DB_data);
        statusmesg = "Total Record Count: " + global.DB_data.totalCount
        rtnres= res.render('empdel', { resultdata:  global.DB_data, resultstatus: statusmesg} );
    })();
 //****************************************************************************** */  
 });

 // Delete function
router.post('/empdel', async (req, res, next) => {
  // populate the varibles **************************
   console.log('call dbcalls')
    dburl='http://' + global.db_token_ip + '/api/v1/employees/';
     varempdel = req.body.employeeNumber
     dbstring=varempdel.toString();
     console.log('dbstring',dbstring)
     dbmethod='delete';
     dbbody='';
  //***************************************************  
 
  // Call the delete function to delete a record , set a two second wait to give the function time to return data
  dbcallspost.data.dbCallsPost(dburl,dbstring,dbmethod,dbbody);
     var sleep = require('sleep-promise');
     (async () => {
         //console.log("Printed immediately.");
         await sleep(2000);
        // console.log("Printed after two seconds.");
        // console.log('after call dbcalls' ,global.DB_data);
         statusmesg = global.DB_data.message
         //rtnres= res.render('empdel', { resultdata:  global.DB_data, resultstatus: statusmesg} );
     })();
  //****************************************************************************** */  

  //************************ Refresh page to remove deleted record */
  // Search function
//router.post('/empdelsearch', async (req, res, next) => {
  // populate the varibles **************************
    console.log('Refresh');
    dburl='http://'+ global.db_token_ip + '/api/v1/employees/search/';
     dbstring=initSearch.toString();
     console.log('Refresh', dbstring);
     dbmethod='get';
     dbbody='';
  //***************************************************  
 
  // Call the get function to quuery the DB, set a two second wait to give the function time to return data
     dbcallsget.data.dbCallsGet(dburl,dbstring,dbmethod,dbbody);
      sleep = require('sleep-promise');
     (async () => {
         //console.log("Printed immediately.");
         await sleep(2000);
        // console.log("Printed after two seconds.");
       //  console.log('after call dbcalls' ,statusmesg);
        if(global.DB_data.message = 'Resource deleted') {
              console.log ('record deleted',global.DB_data);
              statusmesg = "Record Deleted ";
              rtnres= res.render('empdel', { resultdata:  global.DB_data, resultstatus: statusmesg} );
        }
        else {
              statusmesg = "no more records to deleted ";
              Consolelog('no more records to delted');
              rtnres= res.render('empdel', { resultdata: '', resultstatus: statusmesg} )

        };
     
     })
  //****************************************************************************** */  
});


// End of del employee ***********************

        module.exports = router


 