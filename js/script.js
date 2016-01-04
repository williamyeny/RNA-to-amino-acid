$(document).ready(function() {
  console.log("Test");
  $("form").submit(function() {
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
    event.preventDefault();
  });
});

function evaluate(str) {
  var a, b, c, o; 
  o = "";//o for output
  for (i = 0; i < str.length; i+=3) {
    a = str[i];
    b = str[i+1];
    c = str[i+2];
    
    if (a == "U" && b == "C") { o += "serine"; }
    if (a == "C" && b == "U") { o += "leucine"; }
    if (a == "C" && b == "G") { o += "arginine"; }
    if (a == "G" && b == "G") { o += "glycine"; }
    if (a == "G" && b == "U") { o += "valine"; }
    if (a == "G" && b == "C") { o += "alanine"; }
    if (a == "A" && b == "C") { o += "threonine"; }
    if (a == "C" && b == "C") { o += "proline"; }
    if (a == "U" && b == "U") {
      if (c == "U" || c == "C") { o += "phenylalanine"; }
      if (c == "A" || c == "G") { o += "leucine"; }
    }
    if (a == "C" && b == "A") {
      if (c == "U" || c == "C") { o += "histidine"; }
      if (c == "A" || c == "G") { o += "glutamine"; }
    }
    if (a == "A" && b == "G") {
      if (c == "U" || c == "C") { o += "serine"; }
      if (c == "A" || c == "G") { o += "arginine"; }
    }
    if (a == "A" && b == "A") {
      if (c == "U" || c == "C") { o += "asparagine"; }
      if (c == "A" || c == "G") { o += "lysine"; }
    }
    if (a == "G" && b == "A") {
      if (c == "U" || c == "C") { o += "aspartic acid"; }
      if (c == "A" || c == "G") { o += "glutamic acid"; }
    }
    if (a == "A" && b == "U") {
      if (c == "U" || c == "C" || c == "A") { o += "isoleucine"; }
      else { o += "methionine"; }
    }
    if (a == "U" && b == "A") {
      if (c == "U" || c == "C") { o += "tyrosine"; }
      if (c == "A" || c == "G") { o += "STOP"; }
    }
    if (a == "U" && b == "G") {
      if (c == "U" || c == "C") { o += "cysteine"; }
      if (c == "A") { o += "STOP";}
      if (c == "G") { o += "tryptophan"; }
    }
    if (i+3 < str.length) {o += ", ";}
  }
  console.log(o);
  $("#output").html(o);
}