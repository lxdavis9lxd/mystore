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
if ( global.DB_token = 'notoken') {
    // console.log('setting Auth token')
     functions.data.db_sign_in();   
};
//#########################################################
var rtnres =''


 // function to to get API Gets
   async function dbCallsGetv1 (dburl,dbstring,dbmethod,dbbody,rtnejs) { 
     
      console.log('function get dbcall',dburl,dbstring,dbmethod,dbbody,rtnejs);
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


//load empudpt page **********************************
router.get('/empupdt', async (req, res, next) => { rtnres= res.render('empupdt',{ resultdata:  "" , resultstatus: ""})});
//*************************************** */

// Search function ********************************************
router.post('/empupdtsearch',  async (req, res, next) => {
    console.log('empupdtsearchr',req.body.empupdtsearch);
 
    dburl='http://localhost:8084/api/v1/employees/search/';
    dbstring=  req.body.empupdtsearch
    console.log('call dbcalls', dbstring)
    initSearch = req.body.empupdtsearch //.toString();
    dbmethod='get';
    dbbody='';
 //***************************************************  
 // Call the get function to quuery the DB, set a two second wait to give the function time to return data
 dbcallsget.data.dbCallsGet(dburl,dbstring,dbmethod,dbbody,rtnejs) 
    .then((data) =>  {  
     statusmesg = "Total Record Count: " + rtnResults.totalCount
     rtnres= res.render('empupdt', { resultdata:  rtnResults, resultstatus: statusmesg} );
})
})
 

 //  Call Update function
router.post('/empupdtrec', urlencodedParser, async (req, res, next) => {
  // populate the varibles **************************
     console.log('call dbcalls empudt1')
     dburl='http://localhost:8084/api/v1/employees/';
     varempupdt = req.body.employeeNumber
     dbstring=varempupdt.toString();
     dbmethod='patch';
     dbbody = JSON.stringify({"employeeNumber":req.body.employeeNumber,"lastName":req.body.lastName,"firstName":req.body.firstName,"extension":req.body.extension,"email":req.body.email,"officeCode":req.body.officeCode,"reportsTo":req.body.reportsTo,"jobTitle":req.body.jobTitle})
  //***************************************************  
  // Update Record **********************************************
  dbcallspost.data.dbCallsPost(dburl,dbstring,dbmethod,dbbody)
  .then((data) =>{
 //refreash page ***********************************
                    dbbody =''
                    dbstring =  initSearch
                    dburl='http://localhost:8084/api/v1/employees/search/';
                    dbmethod='get';
                    dbCallsGetv1(dburl,dbstring,dbmethod,dbbody,rtnejs) 
                    .then((data) =>  {  
                      console.log(' dbCallsGetv1 then 93' ,rtnResults.records); 
                      statusmesg = "Record Updated: " +  varempupdt
                      rtnres= res.render('empupdt', { resultdata:  rtnResults, resultstatus: statusmesg} );
                  })

  }
  
)
})
  
 module.exports = router
// End of del employee ***********************

      


 