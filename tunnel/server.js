var app = require('express')();
var request = require('request-promise');

var REQ_URL = 'http://127.0.0.1:8080';
REQ_URL = (process.argv[1]) ? process.argv[1] : 

app.get('*', function(req, res) {
	request({
		method: 'GET',
		uri: REQ_URL + req.url
	}).then(rp => {
		res.json(rp);
	}).catch(err => {
		console.log(err);
		res.json({});
	});
});

var PORT = 5000;
app.listen(PORT, _ => console.log('reflecting ' + REQ_URL + ' on ' + PORT));
