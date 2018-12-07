const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3003, () => {
	console.log("Listening to port 3003 challenge 3!");
});