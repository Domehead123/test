
$(document).ready(function() {


$(".bottom-box").click(function() {
    $('#restart').show();
    $("#container0").hide();
});


$("#option1").click(function() {
   $("#top-box").text("What would you like to know about bins?");
   $("#container1").css("display", "flex");
});

$("#option2").click(function() {
   $("#top-box").text("What would you like to know about Council Tax?")
      $("#container2").css("display", "flex");
});


$('#restart').click(function() {
    location.reload();
});


});