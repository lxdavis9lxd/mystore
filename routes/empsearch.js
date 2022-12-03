var express = require('express');
var emp = require('request');
var bodyparser = require('body-parser');
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
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// function to log in to the db
if ( global.DB_token === 'notoken') {
    // console.log('setting Auth token')
     functions.data.db_sign_in();   
};
//#########################################################
var rtnres =''
//################################################################

// Update Employee *******************************          

var rtnres = '';


//load empudpt page **********************************
router.get('/empsearch', async (req, res, next) => { rtnres= res.render('empsearch',{ resultdata:  "" , resultstatus: ""})});
//*************************************** */

// Search function ********************************************
router.post('/empsearch',  async (req, res, next) => {
    console.log('empsearch',req.body.empsearch);
 
   
   dburl='http://' + global.db_token_ip + '/api/v1/employees/search/';
   
    dbstring=  req.body.empsearch
    console.log('call dbcalls search', dburl)
    initSearch = req.body.empsearch //.toString();
    dbmethod='get';
    dbbody='';
 //***************************************************  
 // Call the get function to quuery the DB, set a two second wait to give the function time to return data
 dbcallsget.data.dbCallsGet(dburl,dbstring,dbmethod,dbbody,rtnejs) 
    .then((data) =>  {  
     statusmesg = "Total Record Count: " + rtnResults.totalCount
     rtnres= res.render('empsearch', { resultdata:  rtnResults, resultstatus: statusmesg} );
})
})
 

 module.exports = router
// End of del employee ***********************

      


 