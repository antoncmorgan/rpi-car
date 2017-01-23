var express = require('express')
var url = require('url');
var python = require('python-shell');
const WebSocket = require('ws');
var app = express()

//args: Right (-255 to 255), Left (-255 to 255)
var pySpeed = {
  args: ['0','0']
}
const wss = new WebSocket.Server({ port: 8080});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    var data = JSON.parse(message);
    var left = Math.round(data.left*255);
    var right = Math.round(data.right*255);
    
    pySpeed.args = [right.toString(), left.toString()];
    python.run('./python/DCMotors.py', pySpeed, function () {
    });
  });

  ws.send('complete');
});

app.use('/public', express.static('public'))

app.get('/', function (req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var direction = req.query.direction;

  if (direction != undefined) {
    if (direction == 'forward') {
      pySpeed.args = ['120','120'];
      python.run('./python/DCMotors.py', pySpeed, function () {
        console.log("Going Forward");
      });
    }
    else if (direction == 'backward') {
      pySpeed.args = ['-120','-120'];
      python.run('./python/DCMotors.py', pySpeed, function () {
        console.log("Going Backwards");
      });
    }
    else if (direction == 'stop') {
      pySpeed.args = ['0','0'];
      python.run('./python/DCMotors.py', pySpeed, function() {
        console.log("Stopping");
      });
    }
    res.send(direction);
  }
})

app.listen(3000, function () {
  console.log('RPI-CAR app listening on port 3000!')
})
