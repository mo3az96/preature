$(window).on("load", function () {
  if ($(window).width() >= 991) {
    sal({
      once: true,
    });
  } else {
    sal({
      disabled: true,
    });
  }
});
$(document).ready(function () {
  $("a[data-scroll]").on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    var offset = $(window).width() <= 1199 ? 50 : 100;
    var target = $(this).data("scroll");
    var $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - offset,
        },
        1000,
        "swing"
      );
    if ($(window).width() <= 1199) {
      if (!$(this).parent(".list-item").hasClass("has-sub")) {
        $(".header-nav").fadeOut(300);
        $(".overlay").fadeOut(300);
        $("body").removeClass("overflow");
      }
    }
  });

  /* ~~~~~~~~~~~~~~~ Fixed Header ~~~~~~~~~~~~~~~ */
  if ($(this).scrollTop() >= 10) {
    $("header").addClass("header-scroll");
  } else {
    $("header").removeClass("header-scroll");
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 10) {
      $("header").addClass("header-scroll");
    } else {
      $("header").removeClass("header-scroll");
    }
  });
  if ($(window).width() <= 1199) {
    $(".has-sub .list-link").click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      $(".has-sub .list-link").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-sub .list-link").not(this).siblings().slideUp(500);
    });

    $(".menu-btn").on("click", function (e) {
      $(".header-nav").fadeIn(300);
      $(".overlay").fadeIn(300);
      $("body").addClass("overflow");
    });
    $(".close-btn,.overlay").on("click", function (e) {
      $(".header-nav").fadeOut(300);
      $(".overlay").fadeOut(300);
      $("body").removeClass("overflow");
    });
  }
});
