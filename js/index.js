$(document).ready(function(){
    $("button1").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(3000);
    });
  });
  $(document).ready(function() {
    $('.pull-me').click(function() {
      $('.panel').slideToggle('slow');
    });
  });