var express = require('express')
var url = require('url');
var app = express()

app.get('/', function (req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var direction = req.query.direction;
  res.send(direction);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
