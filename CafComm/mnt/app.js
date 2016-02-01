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


app.post('/ricercadate', function (req, res) {

  setTimeout(function () {

  console.log('Caf dice: '+JSON.stringify(req.body));
  res.send(
    [{data:'15/12/2015', id:'542138', ora:'15:30'},
    {data:'16/12/2015', id:'556138', ora:'12:00'},
    {data:'17/12/2015', id:'542838', ora:'9:40'},
    {data:'18/12/2015', id:'742138', ora:'17:10'}]
  );


}, 10);
});

app.post('/prenota', function (req, res) {

  setTimeout(function () {

  console.log('Caf dice: '+JSON.stringify(req.body));
  res.send(
    {
      prenotato:true
    }
  );


}, 1000);
});


var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('CafComm online: ', host, port);
});
