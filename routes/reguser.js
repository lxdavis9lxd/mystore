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
const bcrypt = require("bcryptjs");
const e = require('express');
var password =""
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
router.get('/reguser', async (req, res, next) => { 
  statusmesg = "Add A User "
  rtnres= res.render('reguser',{ resultdata:  "" , resultstatus: statusmesg})
});
//*************************************** */

 //  Call Add function
router.post('/reguser', urlencodedParser, async (req, res, next) => {
  // populate the varibles **************************
     //console.log('call dbcalls empadd')
    //dburl='http://' + 'localhost:5000' + '/api/auth/register/';
    password = req.body.password
    bcrypt.hash(password, 10).then(async (hash) => {
    
            dburl='http://' + global.db_token_ip  + '/api/v1/users/';
            varregusername = req.body.username
            
            dbstring=''
            dbmethod='post';
            //console.log('password', hash)
            dbbody = JSON.stringify({"Username":req.body.username,"email":req.body.email,"role":req.body.role,"firstname":req.body.firstname,"lastname":req.body.lastname,"password":hash})
            // console.log('dbbody', dbbody)
            //***************************************************  
          // Update Record **********************************************

          await dbcallspost.data.dbCallsPost(dburl,dbstring,dbmethod,dbbody)
  .then((data) =>{
                     //console.log('dbbodata', rtnResults)
                      statusmesg=""
                     statusmesg =  rtnResults.message 
                    
                     if(rtnResults.message  === 'Bad Request'){
                          statusmesg = rtnResults.e.sqlMessage
                         // console.log('dbstatus1', statusmesg)
                                           }
                     //console.log('dbstatus', statusmesg)
                     rtnres= res.render('reguser', { resultdata:  '', resultstatus: statusmesg}
                 
                     
                     );
 //refreash page ***********************************
              
                    

  }
 
)

})

})
 
 module.exports = router
// End of del employee ***********************

      


 