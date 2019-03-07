var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	var options = { 
		method: 'POST',
	  url: 'http://alerts.adeeptechnologies.com/api/v4/?api_key=A3ca2502007ffe7f750f2ef5e91370064&method=sms&message=Hi,&to=7893666676&sender=ADITYA' 
	  };
	  request(options, function (error, response, body) {
	  if(error){
	    console.log('error');
	  }
	  else{
	  	console.log(body);
	  }
    res.render('index');
    });
});

module.exports = router;
