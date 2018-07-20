var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
require('./route')(app);

var server = app.listen(process.env.PORT || 3000, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)

}, 18000);