$(document).ready(function() {
  $(".nav-toggler").click("toggle", function() {
    $(".nav").toggle();
    $(".main-pic-name").attr("src", "pics/svg/auto-name-red.svg");
    $(".nav-toggler").toggle();
    $(".nav-toggler-close").show();
    $(".carousel-control-prev").hide();
    $(".carousel-control-next").hide();
  });
  $(".nav-toggler-close").click(function() {
    $(".nav").toggle();
    $(".main-pic-name").attr("src", "pics/svg/auto-name.svg");
    $(".nav-toggler").toggle();
    $(".nav-toggler-close").hide();
    $(".carousel-control-prev").show();
    $(".carousel-control-next").show();
  });
});
