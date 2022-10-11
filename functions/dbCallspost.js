var express = require('express');
var emp = require('request');
const fetch = require('node-fetch');
var router = express.Router();
var cred ={
  "username":"root",
  "password":"rockwell"
       }


// function to log in to the db
var methods = {
  dbCallsPost:  function(dburl,dbstring,dbmethod,dbbody) { 
     
      console.log('before dbcall',dburl,dbstring,dbmethod,dbbody);
        var empurl = dburl + dbstring;
        var bearer = 'Bearer ' +  global.DB_token;
        const result =   fetch (empurl,( 
        empurl,{
        method: dbmethod,
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json' },
            body:dbbody
}))
.then((response) => response.json())
.then((data) => {
  global.DB_data = data;
  //console.log('Success 41:',data);
  
  global.DB_data = data;
  console.log('golbal:' , global.DB_data);
  //var resultstatus = response.message
  //rtnres= res.render('empdel', { resultdata:  data, resultstatus: data.totalCount} )
  console.log('aft dbcall before exit' );
  return data;
})
.catch((error) => {
  console.error('Error:', error);
});

}};

exports.data = methods;

