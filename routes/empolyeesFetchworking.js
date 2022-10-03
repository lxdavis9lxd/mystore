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
        var bearer = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjoicm9vdCJ9LCJpYXQiOjE2NjQ0MTIxNDgsImV4cCI6MTY2NDQ0ODE0OH0.kSIhD1wreJ32HdhFcBdBwyWZ_47hl8mvc0j1JFDsnXY';
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
            //console.log(result),
         const data = await result.json();
        return res.json(data);
        listx = result.json();
        console.log(listx.totalCount);
         res.render('getemployeeslist', { title: "test1"});
        // holdres= res.render('getemployeeslist', { title: listx  } )
        
});             
            

        module.exports = router


 