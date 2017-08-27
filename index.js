const express = require('express')
const http = require('http');

const app = express();

app.set('port', (process.env.PORT || 5000));

// http://api.icndb.com/jokes/random?firstName=Rajni&lastName=Kanth
app.get('*', function (req, res) {

	var options = {
	  host: 'api.icndb.com',
	  path : '/jokes/random?firstName=Rajni&lastName=Kanth',
	  headers: {
		'Content-Type': 'application/json'
	  }
	};

	var joke = "";
	http.get(options, function(resp){
	  resp.on('data', function(chunk){
		joke = JSON.parse(chunk).value.joke;
		console.log("assigned joke " + joke);
		  res.send(joke);
	  });
	  
	}).on("error", function(e){
	  	console.log("Got error: " + e.message);
	  res.send(joke);
	});
});

app.listen(5000, function () {
    console.log('App is running, server is listening on port ', app.get('port'));
})
