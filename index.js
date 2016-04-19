var express = require('express');
var mongodb = require('mongodb');
var app = express();
var myDB;
var mongodbURL = 'mongodb://roger2200:roger40914@ds011311.mlab.com:11311/learn';

app.set('port', (process.env.PORT || 5000));
mongodb.MongoClient.connect(mongodbURL, function(err, db) {
	if (err) {
		console.log(err);
		} 
		else {
			myDB = db;
			console.log('connection success');
			}
			});
app.get('/', function(request, response) {
	response.status(200).send('<html><body><H1>Hello World</H1></body></html>');
	response.end();
	});
app.get('/api/test', function(request, response) {
var collection = myDB.collection('my_data');
collection.find({}).toArray(function(err, docs) {
if (err) {
response.status(406).end();
} else {
response.type('application/json');
response.status(200).send(docs);
response.end();
}
});
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});