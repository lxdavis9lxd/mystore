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
//router.get('/login', async (req, res, next) => { rtnres= res.render('reguser',{ resultdata:  "" , resultstatus: ""})});
//*************************************** */

 //  Call Add function
router.post('/login', urlencodedParser, async (req, res, next) => {
  // populate the varibles **************************
     //console.log('call dbcalls empadd')
    dburl='http://' + global.db_token_ip + '/api/v1/users/';
     varregusername = req.body.username
     console.log('string', req.body.username)
     dbstring=req.body.username + "&" + req.body.password
     dbmethod='get';
     dbbody=""
     //dbbody = JSON.stringify({"username":req.body.username,"password":req.body.password})
     console.log('string', dbstring)
     //***************************************************  
  // Update Record **********************************************
  dbcallsget.data.dbCallsGet(dburl,dbstring,dbmethod,dbbody,rtnejs) 
  //dbcallspost.data.dbCallsget(dburl,dbstring,dbmethod,dbbody)
  .then((data) =>{
                                         
                     console.log('login succeful',rtnResults) 
                     var information =''
                     if (rtnResults.message){
                        information = "The Login or Password is incorrect: "  + rtnResults.message + ". Please try again "
                      
                     } else {
                      information = "Hello " + rtnResults.firstname + " " + rtnResults.lastname
                     }
                    // information = "Hello " + rtnResults.firstname + " " + rtnResults.lastname
                     //load home page **********************************
                     rtnres= res.render('home',{ resultdata:  "" , title: information});

                     //refreash page ***********************************
                   
                    

  }
  
)
})
  
 module.exports = router
// End of login***********************

      


 