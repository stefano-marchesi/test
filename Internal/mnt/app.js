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

var hash = Math.floor((Math.random() * 10000));

  var url= 'https://api.mailgun.net/v3/sandboxfb6330fa39d04b2cbd6cca03b4b5df40.mailgun.org/messages';
  var key = 'api:key-789ffeeea599b8c7f8030d4572dc56ad';
  var senrer = 'mrc@ospedale.com' ;
  var reciver = req.body.mail;
  var subject = 'Codice di conferma';
  var text = 'Il Suo codice di conferma è: '+hash;


  var curl = 'curl -s --user \''+key +'\' \
      '+url +' \
      -F from=\''+senrer +'\' \
      -F to=\''+reciver +'\' \
      -F subject=\''+subject +'\' \
      -F text=\''+text +'\'';

      var exec = require('child_process').exec;
      var child = exec(curl,
        function(error, stdout, stderr)  {
          console.log(curl);
          res.send(
            {mailsent:true,
            verifycationcode:  hash}
          );
      });



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
