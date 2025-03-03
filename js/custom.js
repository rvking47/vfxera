(function () {
  "use strict";

  $(".gotoForm").click(function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      $("html,body").animate(
        {
          scrollTop: $(".formWrapper").offset().top - 100,
        },
        1500
      );
    } else {
      $("html,body").animate(
        {
          scrollTop: $(".formWrapper").offset().top - 200,
        },
        1500
      );
    }
  });

  $(window).bind("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-top").fadeIn("xslow");
    } else {
      $(".scroll-to-top").fadeOut("xslow");
    }
  });
})();
