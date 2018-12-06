const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.get("/", (req, res) =>{
// 	console.log(path.join(__dirname,'/../public/dist'));
// 	res.send("hello");
// })


app.listen(3001, () => {
	console.log("Listening to port 3001 challenge 2b!");
});