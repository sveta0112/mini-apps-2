const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// app.get("/data/:start/:end", (req, res) =>{
// 	//console.log(path.join(__dirname,'/../public/dist'));
// 	//res.send("hello");
// 	var start = req.params.start;
// 	var end = req.params.end;
// 	request('https://api.coindesk.com/v1/bpi/historical/close.json?start={start}&end={end}', (error, response, body) => {
	  
// 	});
	
// })



// app.get('/data/:start/:end', (req, res) => {
//   var startDate = req.params.start;
//   var endDate = req.params.end;
//   request(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`, 
//     (error, response, body) => {
//       console.log('response from inside api request: ', request);
//       console.log('body from inside api request: ', body);
//       if (error) {
//         res.status(500).send(error);
//       } else {
//         res.status(200).send(body);
//       }
//   });
// });




app.listen(3001, () => {
	console.log("Listening to port 3001 challenge 2b!");
});