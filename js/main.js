$(function () {
  "use strict";
  // adjust slider height
  var windowHeight = $(window).height();
  var upperHeight = $(".upper-bar").innerHeight();
  var navHeight = $(".navbar").innerHeight();
  $(".slider , .carousel-item").height(
    windowHeight - (upperHeight + navHeight)
  );
  //Featured Work
  $(".featured-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      $(".imgs-father .col-md").css("opacity", "1");
    } else {
      $(".imgs-father .col-md").css("opacity", "0.08");
      $($(this).data("class")).parent().css("opacity", "1");
    }
  });
});
