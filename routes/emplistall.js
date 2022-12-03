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
var rtnres = '';
const fetch = require('node-fetch');
var router = express.Router();
var functions = require('../functions/db_sign_in');
var dbcallsget = require('../functions/dbCallsget');
var dbcallspost = require('../functions/dbCallsPost');

if ( global.DB_token === 'notoken') {
     //console.log('setting Auth token')
     functions.data.db_sign_in();   
};

var rtnejs='emplistall'


router.get('/emplistall', async (req, res, next) => {

   console.log('emplistall',req.body.empsearch);
   console.log('ip', global.db_token_ip)
   dburl='http://' + global.db_token_ip + '/api/v1/employees/';
   
   dbstring=  ''
   dbmethod='get';
   dbbody='';
//***************************************************  
// Call the get function to quuery the DB, set a two second wait to give the function time to return data
dbcallsget.data.dbCallsGet(dburl,dbstring,dbmethod,dbbody,rtnejs) 
   .then((data) =>  {  
    statusmesg = "Total Record Count: " + rtnResults.totalCount
    rtnres= res.render('emplistall', { resultdata:  rtnResults, resultstatus: statusmesg} );
})
})

  module.exports = router