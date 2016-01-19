var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  console.log('CILL dice: '+JSON.stringify(req.body));
  res.send(
    {name: 'franco', esame: '852'}
  );
});

app.post('/verifynre', function (req, res) {
  setTimeout(function () {

  console.log('CILL dice: '+JSON.stringify(req.body));
  res.send(
    {name: 'franco', esame: '852'}
  );

}, 1000);
});


var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('CillComm online: ', host, port);
});
