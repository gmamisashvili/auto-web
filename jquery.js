$(document).ready(function() {
  $(".nav-toggler").click("toggle", function() {
    $(".nav").toggle();
    $(".main-pic-name").attr("src", "pics/svg/auto-name-red.svg");
    $(".nav-toggler").toggle();
    $(".nav-toggler-close").show();
    $(".slider-left").hide();
    $('.slider-right').hide();
  });
  $(".nav-toggler-close").click(function() {
    $(".nav").toggle();
    $(".main-pic-name").attr("src", "pics/svg/auto-name.svg");
    $(".nav-toggler").toggle();
    $(".nav-toggler-close").hide();
    $(".slider-left").show();
    $('.slider-right').show();
  });
});
