$(document).ready(function() {
  $("#submit").click(function() {
    var str = $("#input").val();
    str = str.toUpperCase();
    //check for validity
    if (str.length % 3 == 0) {
      for (i = 0; i < str.length; i++) {
        if (str[i] == "A" || str[i] == "T" || str[i] == "C" || str[i] == "G" || str[i] == "U") {
          if (i == str.length - 1) {
            evaluate(str);
          }
          continue;
        } else{
          alert("Hey man, put some valid characters.");
          break;
        }
      }
    } else {
      alert("Hey man, that's not a correct length");
    }
      
  });
});

function evaluate(str) {
  console.log(str);
  var draw = SVG('drawing');
  for (i = 0; i < str.length; i++) {
    draw.polygon('0,50 50,20 100,50 70,80 30,80').fill('blue').move(0, i * 150);
    $("#drawing").css("height", i*50 + 150 + "px");
  }
}