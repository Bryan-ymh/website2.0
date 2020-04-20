$(function() {

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if ($(".top-outer").hasClass("init-fixedheader-1")) {
    $(".top-outer").removeClass("init-fixedheader-1")
    $(".top-outer").addClass("fixedheader-1")
    return
  }
  if (currentScroll > lastScroll ){
    $(".top-outer").css('top', '-95px')
  } else if (currentScroll < lastScroll) {
    // expect show the header
    //$(".top-outer").addClass("fixedheader-1")
    $(".top-outer").css('top', '0px')
  }
  lastScroll = currentScroll;
});
});
