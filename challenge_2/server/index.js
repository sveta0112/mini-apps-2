const express = require('express');
const bodyParser = require('body-parser');


var app = express();
app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.listen(3002, () => {
	console.log("Listening to port 3002 from challenge 2!");
});
