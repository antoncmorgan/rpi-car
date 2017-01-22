$("#forward").click(function () {
  $.get("http://192.168.1.92:3000/?direction=forward", function (data, status) {
  });
});
$("#backward").click(function () {
  $.get("http://192.168.1.92:3000/?direction=backward", function (data, status) {
  });
});
$("#stop").click(function () {
  $.get("http://192.168.1.92:3000/?direction=stop", function (data, status) {
  });
});

var ws = new WebSocket('ws://192.168.1.92:8080');
ws.addEventListener('open',function open() {
  ws.send("New Connection");
});
ws.addEventListener('message', function incoming(data, flags) {
  console.log(data);
});

var updateRemoteControl = function (joysticks) {
  var data = {
    left: ((joysticks.maxRadius - joysticks.left.deltaY()) / joysticks.maxRadius) - 1,
    right: ((joysticks.maxRadius - joysticks.right.deltaY()) / joysticks.maxRadius) - 1
  };

  joysticks.noMovement = (data.left == joysticks.previousLeft && data.right == joysticks.previousRight);
  
  if (!joysticks.noMovement) {
    // var encodedData = encodeURIComponent(JSON.stringify(data));
    if (ws.readyState == 1) {
      ws.send(JSON.stringify(data));
    }
  }
  joysticks.previousLeft = data.left;
  joysticks.previousRight = data.right;
}

var initJoystick = function (element) {
  var joysticks = {
    left: {},
    right: {},
    maxRadius: 140 * window.devicePixelRatio,
    previousLeft: 0,
    previousRight: 0,
    noMovement: true,
    isReady: false
  }

  joysticks.left = new VirtualJoystick({
    container: element,
    mouseSupport: true,
    strokeStyle: 'cyan',
    limitStickTravel: true,
    stickRadius: joysticks.maxRadius
  });
  joysticks.left.addEventListener('mouseStartValidation', function (event) {
    event.preventDefault();
    var x = event.clientX;
    var y = event.clientY;
    if (x >= window.innerWidth / 2) return false;
    return true
  });
  joysticks.left.addEventListener('touchStartValidation', function (event) {
    var touch = event.changedTouches[0];
    if (touch.pageX >= window.innerWidth / 2) return false;
    return true
  });

  joysticks.right = new VirtualJoystick({
    container: element,
    mouseSupport: true,
    strokeStyle: 'orange',
    limitStickTravel: true,
    stickRadius: joysticks.maxRadius
  });

  joysticks.right.addEventListener('mouseStartValidation', function (event) {
    event.preventDefault();
    var x = event.clientX;
    var y = event.clientY;
    if (x < window.innerWidth / 2) return false;
    return true
  });
  joysticks.right.addEventListener('touchStart', function (event) {
    var touch = event.changedTouches[0];
    if (touch.pageX < window.innerWidth / 2) return false;
    return true
  });

  joysticks.isReady = true;

  return joysticks;
}