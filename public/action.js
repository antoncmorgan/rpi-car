$("#forward").click(function(){
  $.get("http://192.168.1.92:3000/?direction=forward", function(data, status){
    });
});
$("#backward").click(function(){
 $.get("http://192.168.1.92:3000/?direction=backward", function(data, status){
    });
});
$("#stop").click(function(){
 $.get("http://192.168.1.92:3000/?direction=stop", function(data, status){
    });
});
