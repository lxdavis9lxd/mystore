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
//if ( global.DB_token = 'notoken') {
    // console.log('setting Auth token')
     functions.data.db_sign_in();   
//};
//#########################################################
var rtnres =''
//################################################################

// Update Employee *******************************          

var rtnres = '';


//load empudpt page **********************************
router.get('/reguser', async (req, res, next) => { rtnres= res.render('reguser',{ resultdata:  "" , resultstatus: ""})});
//*************************************** */

 //  Call Add function
router.post('/reguser', urlencodedParser, async (req, res, next) => {
  // populate the varibles **************************
     //console.log('call dbcalls empadd')
    //dburl='http://' + 'localhost:5000' + '/api/auth/register/';
    dburl='http://' + global.db_token_ip  + '/api/v1/users/';
     varregusername = req.body.username
     dbstring=''
     dbmethod='post';
     //console.log('reqbody', req.body)
     dbbody = JSON.stringify({"Username":req.body.username,"password":req.body.password,"email":req.body.email,"role":req.body.role,"firstname":req.body.firstname,"lastname":req.body.lastname})
     //dbbody = JSON.stringify({"Username":"x","password":"x","email":"x","role":"x","firstname":"x","lastname":"x"})
     console.log('dbbody', dbbody)
     //***************************************************  
  // Update Record **********************************************
  dbcallspost.data.dbCallsPost(dburl,dbstring,dbmethod,dbbody)
  .then((data) =>{
                     statusmesg = "Record Updated: "
                     rtnres= res.render('reguser', { resultdata:  '', resultstatus: statusmesg} );
 //refreash page ***********************************
                   
                    

  }
  
)
})
  
 module.exports = router
// End of del employee ***********************

      


 