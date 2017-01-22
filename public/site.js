
$(document).ready(function () {

  console.log("touchscreen is", VirtualJoystick.touchScreenAvailable() ? "available" : "not available");

  var joysticks = initJoystick(document.getElementById('wrapper'));

  setInterval(function () {
    var outputEl = document.getElementById('result');
    outputEl.innerHTML = '<b>Result:</b> '
      + ' dx:' + joysticks.left.deltaX()
      + ' dy:' + joysticks.left.deltaY()
      + (joysticks.left.right() ? ' right' : '')
      + (joysticks.left.up() ? ' up' : '')
      + (joysticks.left.left() ? ' left' : '')
      + (joysticks.left.down() ? ' down' : '')
  }, 1 / 30 * 1000);

});