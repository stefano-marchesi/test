var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
app.get('/', function (req, res) {
  res.send(
    [{data:'15/12/2015', id:'542138'},
    {data:'16/12/2015', id:'556138'},
    {data:'17/12/2015', id:'542838'},
    {data:'18/12/2015', id:'742138'}]
  );
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
