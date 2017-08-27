const express = require('express')
const http = require('http');

const app = express()
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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
