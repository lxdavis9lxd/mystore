var express = require('express');
var emp = require('request');
const fetch = require('node-fetch');
var router = express.Router();

//var rtnres = '';

// function to log in to the db
var methods = {
  dbCallsPost:  async function(dburl,dbstring,dbmethod,dbbody) { 
     
      console.log('dbCallsPost before dbcall ',dburl,dbstring,dbmethod,dbbody);
        var empurl = dburl + dbstring;
        var bearer = 'Bearer ' +  global.DB_token;
        const result = await  fetch (empurl,( 
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
  let DataToReturn = data;
    console.log('Success 41:',data);
    //console.log('Success 41a:',DataToReturn);
  global.DB_data = data;
  rtnResults = data;
  //console.log('golbal:' , global.DB_data);
  //var resultstatus = response.message
  //rtnres= res.render('empdel', { resultdata:  data, resultstatus: data.totalCount} )
  
  //console.log('aft dbcall before exit');
  var sqlServerObj = {
    resultx: data,
};
  return rtnResults;
})
console.log("here here")
}};
//console.log('results');
exports.data = methods;

