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
//################################################################

// Update Employee *******************************          

var rtnres = '';


//load empudpt page **********************************
router.get('/empadd', async (req, res, next) => { rtnres= res.render('empupdt',{ resultdata:  "" , resultstatus: ""})});
//*************************************** */

 //  Call Add function
router.post('/empAdd', urlencodedParser, async (req, res, next) => {
  // populate the varibles **************************
     //console.log('call dbcalls empadd')
     dburl='http://localhost:8084/api/v1/employees/';
     varempupdt = req.body.employeeNumber
     dbstring=''
     dbmethod='post';
     dbbody = JSON.stringify({"employeeNumber":req.body.employeeNumber,"lastName":req.body.lastName,"firstName":req.body.firstName,"extension":req.body.extension,"email":req.body.email,"officeCode":req.body.officeCode,"reportsTo":req.body.reportsTo,"jobTitle":req.body.jobTitle})
     console.log('dbbody', dbbody)
     //***************************************************  
  // Update Record **********************************************
  dbcallspost.data.dbCallsPost(dburl,dbstring,dbmethod,dbbody)
  .then((data) =>{
                     statusmesg = "Record Updated: "
                     rtnres= res.render('empadd', { resultdata:  '', resultstatus: statusmesg} );
 //refreash page ***********************************
                   
                    

  }
  
)
})
  
 module.exports = router
// End of del employee ***********************

      


 