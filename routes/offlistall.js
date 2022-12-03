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

var rtnejs='offlistall'


router.get('/offlistall', async (req, res, next) => {

   console.log('offlistall',req.body.empsearch);

  dburl='http://' + global.db_token_ip + '/api/v1/offices/?pageNo=1&pageSize=100';
   dbstring=  ''
   dbmethod='get';
   dbbody='';
//***************************************************  
// Call the get function to quuery the DB, set a two second wait to give the function time to return data
dbcallsget.data.dbCallsGet(dburl,dbstring,dbmethod,dbbody,rtnejs) 
   .then((data) =>  {  
    statusmesg = "Total Record Count: " + rtnResults.totalCount
    rtnres= res.render('offlistall', { resultdata:  rtnResults, resultstatus: statusmesg} );
})
})

  module.exports = router