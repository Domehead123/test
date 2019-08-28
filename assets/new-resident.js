
$(document).ready(function() {

$(".bottom-box").click(function() {
    $('#restart').show();
});


$("#option1").click(function() {
   $("#top-box").text("What would you like to know about bins?")
   $("#option1").children().html("<a href='https://www.southampton.gov.uk/bins-recycling/bins/'>When will my bin be collected?</a>");
   $("#option2").children().html("<a href='https://www.southampton.gov.uk/bins-recycling/bins/bin-size.aspx'>How can I change my bin size?</a>");
    $("#option3").children().html("<a href='https://www.southampton.gov.uk/bins-recycling/bins/lost-bin.aspx'>How do I report a lost bin?</a>");
    $("#option4").children().html("<a href='https://www.southampton.gov.uk/bins-recycling/bins/need-help-putting-your-bins-out.aspx'>How can I get help putting my bin out?</a>");
    $("#option5").hide();
    $("#option6").hide();
    $("#option7").hide();
    $("#option8").hide();
});


$("#option2").click(function() {
   $("#top-box").text("What would you like to know about Council Tax?")
   $("#option1").children().html("<a href='https://www.southampton.gov.uk/council-tax/your-council-tax/change-address.aspx'>How do I register for Council Tax?</a>");
   $("#option2").children().html("<a href='https://www.southampton.gov.uk/council-tax/your-council-tax/'>How do I pay my council tax?</a>");
   
    $("#option3").children().html("<a href='https://www.southampton.gov.uk/council-tax/discounts-exemptions/single-person-discount.aspx'>How do I get a single person discount?</a>");
    $("#option4").children().html("<a href='https://www.southampton.gov.uk/council-tax/discounts-exemptions/'>Where can I find out about council tax examptions?</a>");
    $("#option5").children().html("<a href='https://www.southampton.gov.uk/council-tax/information/wrong-band.aspx'>What do I do if I think my council tax band is wrong?</a>");
    $("#option6").children().html("<a href='https://www.southampton.gov.uk/council-tax/information/understanding-council-tax-bill.aspx'>How can I understand my council tax bill?</a>");
  $("#option7").children().html("<a href='https://www.southampton.gov.uk/council-tax/information/understanding-council-tax-bill.aspx'>How can I understand my council tax bill?</a>");
    $("#option8").hide();
});

$('#restart').click(function() {
    location.reload();
});


});