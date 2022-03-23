var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
"description": "Hello World!",
	 "main": "app.js",
	 "scripts": { "start": "node app.js" },
	 "author": "Red{nbsp}Hat Training",

