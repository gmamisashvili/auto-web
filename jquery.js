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

$(".main-form").submit(function(e) {
  e.preventDefault();
  let elements = [
    $("#exampleInputName"),
    $("#exampleInputEmail"),
    $("#exampleInputSubject"),
    $("#exampleFormControlTextarea1")
  ];
  let errors = [
    $(".name-error"),
    $(".email-error"),
    $(".subject-error"),
    $(".textarea-error")
  ];

  for (i = 0; i < elements.length; i++) {
    if (elements[i].val() == "") {
      errors[i].show();
    } else {
      errors[i].hide();
    }
  }

  document.getElementById("male");
  document.getElementById("female");

  if (!male.checked && !female.checked) {
    $(".gender-error").show();
  } else {
    $(".gender-error").hide();
  }
});

// form-error-p
// form-control
