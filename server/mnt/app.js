var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http');
var request = require('request');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/caf/prenota', function (req, res) {
  request({
    uri: "http://CafComm.ospedale/prenota",
    method: "POST",
    form: req.body
  }, function(error, response, body) {
      res.send(body);
  });
});

app.post('/caf/ricercadate', function (req, res) {
  request({
    uri: "http://CafComm.ospedale/ricercadate",
    method: "POST",
    form: req.body
  }, function(error, response, body) {
      res.send(body);
  });
});

app.post('/cill/verifynre', function (req, res) {
  request({
    uri: "http://CillComm.ospedale/verifynre",
    method: "POST",
    form: req.body
  }, function(error, response, body) {
      res.send(body);
  });
});

app.post('/internal/sendmail', function (req, res) {
  request({
    uri: "http://Internal.ospedale/sendmail",
    method: "POST",
    form: req.body
  }, function(error, response, body) {
      res.send(body);
  });
});

app.post('/internal/verifymail', function (req, res) {
  request({
    uri: "http://Internal.ospedale/verifymail",
    method: "POST",
    form: req.body
  }, function(error, response, body) {
      res.send(body);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server online', host, port);
});
