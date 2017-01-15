var express = require('express')
var url = require('url');
var python = require('python-shell');
var app = express()

//args: Right (0-255), Left (0-255), Direction (1: forward, 0: background)
var pyForward = {
  args: ['40','40','1']
}
var pyBackward = {
  args: ['40','40','0']
}
var pyStop = {
  args: ['0', '0', '0']
}

app.get('/', function (req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var direction = req.query.direction;
  if (direction == 'forward') {
    python.run('./python/DCMotors.py', pyForward, function () {
      console.log("Going Forward");
    });
  }
  else if (direction == 'backward') {
    python.run('./python/DCMotors.py', pyBackward, function () {
      console.log("Going Backwards");
    });
  }
  else if (direction == 'stop') {
    python.run('./python/DCMotors.py', pyStop, function() {
      console.log("Stopping");
    });
  }
  res.send(direction);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
