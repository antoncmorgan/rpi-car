var express = require('express')
var url = require('url');
var python = require('python-shell');
var app = express()

//args: Right (0-255), Left (0-255), Direction (1: forward, 0: background)
var pySpeed = {
  args: ['40','40','1']
}
app.use('/public', express.static('public'))

app.get('/', function (req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var direction = req.query.direction;
  var data = req.query.data;

  if (data != undefined) {
    console.log(JSON.stringify(data));
    res.send(JSON.stringify(data));
  }
  else if (direction != undefined) {
    if (direction == 'forward') {
      pySpeed.args = ['120','120','1'];
      python.run('./python/DCMotors.py', pySpeed, function () {
        console.log("Going Forward");
      });
    }
    else if (direction == 'backward') {
      pySpeed.args = ['120','120','0'];
      python.run('./python/DCMotors.py', pySpeed, function () {
        console.log("Going Backwards");
      });
    }
    else if (direction == 'stop') {
      pySpeed.args = ['0','0','1'];
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
