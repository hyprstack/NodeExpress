var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('nodejs!');
});

app.listen(3000);

/*
	Run this with Node.js in your command line by typing:
		$ node server

	To view the message open your browser at: 
		HTTP://localhost:3000/
*/