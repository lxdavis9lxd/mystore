var express = require('express');
var emp = require('request');
const fetch = require('node-fetch');
var router = express.Router();
var listx ='';
var holdres = '';
console.log('before');
router.get('/', async (req, res, next) => {
    const fetch = require('node-fetch');
        console.log('hit it');  
        var empurl ='http://localhost:8084/api/v1/customers/?pageNo=1&pageSize=100';
        var bearer = 'Bearer ' +  global.DB_token;
        //var holdres = res;
        const result = await fetch(empurl,(
        empurl,{
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            //'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            'Content-Type': 'application/json' }
}));
        const data = await result.json();
        //data.records.forEach(function(record) {
        //  console.log(record.customerName);
        // return res.json( record.customerName);
       // });

        
        // res.render('getemployeeslist', { title: record.customerName});
        console.log(data);
         holdres= res.render('getemployeeslist', { resultdata:  data} )
        
});             
            

        module.exports = router


 