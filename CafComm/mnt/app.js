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
      [{data:'09/03/2016', id:'542838', ora:'9:40'},
      {data:'18/03/2016', id:'556138', ora:'17:20'},
      {data:'12/08/2016', id:'542138', ora:'19:40'}
      ]
    );
  }, 10);
});

app.post('/prenota', function (req, res) {

  setTimeout(function () {



    var url= 'https://api.mailgun.net/v3/sandboxfb6330fa39d04b2cbd6cca03b4b5df40.mailgun.org/messages';
    var key = 'api:key-789ffeeea599b8c7f8030d4572dc56ad';
    var senrer = 'mrc@ospedale.com' ;
    var reciver = req.body.mail;
    var subject = 'Conferma prenotazione esame';
    var text = 'Esame prenotato in data ' + req.body.chosendate.data + ' alle ore '+ req.body.chosendate.ora+'. Legga le norme di buona preparazione alla pagina XXX, paghi il ticket alla pagina XXX e quando il referto sarà pronto potrà ritirarlo alla pagina XXX';


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
        console.log('email spedita a '+ req.body.mail);
        res.send(
          {
            prenotato:true
          }
        );
      });


      console.log('Caf dice: '+JSON.stringify(req.body));


    }, 1000);
  });


  var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('CafComm online: ', host, port);
  });
