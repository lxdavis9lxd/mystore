var express = require('express');
var emp = require('request');
const fetch = require('node-fetch');
var router = express.Router();
var cred ={
  "username":"root",
  "password":"rockwell"
       }
 var rtnres =''

// function to log in to the db
var methods = {
  dbCallsGet:  async  function(dburl,dbstring,dbmethod,dbbody,rtnejs) { 
     
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
//console.log('Success 41:',global.DB_token);

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
  rtnResults= error
  return  rtnResults
  });


}};

exports.data = methods;

