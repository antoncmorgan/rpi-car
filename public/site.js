
$(document).ready(function () {

    console.log("touchscreen is", VirtualJoystick.touchScreenAvailable() ? "available" : "not available");
 
    var joystick	= new VirtualJoystick({
	    container	: document.getElementById('wrapper'),
	    mouseSupport	: true,
    });
    joystick.addEventListener('touchStart', function(){
	    console.log('down')
    })
    joystick.addEventListener('touchEnd', function(){
        console.log('up')
    })

    setInterval(function(){
		var outputEl	= document.getElementById('result');
		outputEl.innerHTML	= '<b>Result:</b> '
			+ ' dx:'+joystick.deltaX()
		    + ' dy:'+joystick.deltaY()
			+ (joystick.right()	? ' right'	: '')
			+ (joystick.up()	? ' up'		: '')
		    + (joystick.left()	? ' left'	: '')
			+ (joystick.down()	? ' down' 	: '')	
    }, 1/30 * 1000);


});