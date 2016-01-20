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



app.post('/sendmail', function (req, res) {


  setTimeout(function () {

    console.log('Internal dice: '+JSON.stringify(req.body));
    res.send(
      {mailsent:true}
    );

  }, 500);
});

app.post('/verifymail', function (req, res) {
  setTimeout(function () {

    console.log('Internal dice: '+JSON.stringify(req.body));
    res.send(
      {mailverified:true}
    );

  }, 500);
});


var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Internal online: ', host, port);
});
