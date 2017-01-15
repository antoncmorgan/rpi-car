$("#forward").click(function(){
  $.get("http://192.168.1.92:3000/?direction=forward", function(data, status){
        alert("Full steam ahead!");
    });
});
$("#backward").click(function(){
 $.get("http://192.168.1.92:3000/?direction=backward", function(data, status){
        alert("Take it back now, y'all");
    });
});
