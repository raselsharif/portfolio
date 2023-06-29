

// =========== typed js for my title =====
var typed = new Typed('#myTitle', {
  strings: ['Web Designer', 'Future Web Developer'],
  typeSpeed: 50,
  loop: true,
});
// =========== mixitup js ==========
var mixer = mixitup(".mixitup", {
  selectors: {
    target: '.mix'
  },
  animation: {
    duration: 300
  }
});
// ========= section on top ======

$(function () {
// ========== nvbar icon change =========

$(".navbar-toggler-icon").click(function(){
  $(this).toggleClass("navbar_close");
})

// ======= hide menubar click on body =========
$(".nav-link").click(function(){
  $("#navbarNav").removeClass("show")
  $(".navbar-toggler-icon").removeClass("navbar_close")
})
// ========== section close =========
  $(".about__links").click(function () {
    $("#about").addClass("about__top")
    // $("#about").fadeIn()    
  })
  $(".about__close").click(function () {
    $("#about").removeClass("about__top")
    // $("#about").fadeOut()    
  })
  // ===================================
  $(".resume__links").click(function () {
    $("#resume").addClass("resume__top")
    // $("#resume").fadeIn()
  })
  $(".resume__close").click(function () {
    $("#resume").removeClass("resume__top")
    // $("#resume").fadeOut()
  })
  // ===================================

  $(".portfolio__links").click(function () {
    $("#portfolio").addClass("portfolio__top")
    // $("#portfolio").fadeIn()
  })
  $(".portfolio__close").click(function () {
    $("#portfolio").removeClass("portfolio__top")
    // $("#portfolio").fadeOut()
  })
  // ===================================

  $(".blog__links").click(function () {

    $("#blog").addClass("blog__top")
    // $("#blog").fadeIn()
  })
  $(".blog__close").click(function () {

    $("#blog").removeClass("blog__top")
    // $("#blog").fadeOut()
  })
  // ===================================

  $(".contact__links").click(function () {

    $("#contact").addClass("contact__top")
    // $("#contact").fadeIn()
  })
  $(".contact__close").click(function () {

    $("#contact").removeClass("contact__top")
    // $("#contact").fadeOut()
  })

  // ========== portfolio active menu ========
  $(".list__btn").click(function () {
    console.log("clicked");
    $(this).addClass("btn__active").siblings().removeClass("btn__active");
  })


})

// ============= slick slider ==========
$('.slick__slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  appendDots: $('.testi__dots'),
  centerMode: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2500,
      }
    }
  ]
});

// ========= venobox youtube veido =======
new VenoBox({
  selector: '.my-video-links',
});