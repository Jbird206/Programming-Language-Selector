$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());
    var number4 = parseInt($("#input4").val());
    var number5 = parseInt($("#input5").val());

    var result = number1 + number2 + number3 + number4 + number5;


  $("#output").text(result);
  if (result === 0 || result < 10) {
    $("#python").show();
    $("form#calculator").hide()
 } else if (result >= 10 & result < 19) {
   $("#Ruby").show();
   $("form#calculator").hide()
} else if (result >= 19 & result < 30) {
 $("#C").show();
 $("form#calculator").hide()
 } else if (result >= 30 & result < 40) {
  $("#Java").show();
  $("form#calculator").hide()
} else {
  $("#fullstack").show();
  $("form#calculator").hide()
 }

 });
});
