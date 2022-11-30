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
const bcrypt = require("bcryptjs")
// function to log in to the db
//if ( global.DB_token = 'notoken') {
    // console.log('setting Auth token')
     functions.data.db_sign_in();   
//};
//#########################################################
var rtnres =''
//################################################################

          

var rtnres = '';


//load empudpt page **********************************
//router.get('/login', async (req, res, next) => { rtnres= res.render('reguser',{ resultdata:  "" , resultstatus: ""})});
//*************************************** */

 //  Call login function
router.post('/login', urlencodedParser, async (req, res, next) => {
  // Login validation **************************
     
     password = req.body.password
   
    
                     dburl='http://' + global.db_token_ip + '/api/v1/users/';
                     varregusername = req.body.username
                     dbstring=req.body.username
                     dbmethod='get';
                     dbbody=""
                   //***************************************************  
                  // Check logon  **********************************************
                   dbcallsget.data.dbCallsGet(dburl,dbstring,dbmethod,dbbody,rtnejs) 
                                  .then(async (data) => {                                    
                                       console.log('login succeful',rtnResults) 
                                       var information =''
                                       bcrypt.compare(req.body.password, rtnResults.password) .then(function (result)  {
                                                 result
                                                console.log("compare",result)

                                                if (result==false){
                                                               information = "The Login or Password is incorrect:  Please try again "
                                                        
                                                 
                                                } else {
                                                         information = "Hello " + rtnResults.firstname + " " + rtnResults.lastname
                                                       
                                               
                                                }
                                                console.log("info",information) 
                                                rtnres= res.render('home',{ resultdata:  "" , title: information});
                                                
                                       })
                                       
                                       //load home page **********************************
                                      

                                       
                                    
                                    

                  }
  
)
})
//})
  
 module.exports = router
// End of login***********************

      


 