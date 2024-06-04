// =========== typed js for my title =====
var typed = new Typed("#myTitle", {
  strings: ["Responsive Web Designer", "React Developer"],
  typeSpeed: 50,
  loop: true,
});
// =========== mixitup js ==========
var mixer = mixitup(".mixitup", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});
// ========= section on top ======

$(function () {
  // ============ preloader ============
  $(window).on("load", function () {
    $(".preloader__main").delay(700).fadeOut(700);
  });
  // ========== navbar icon change =========

  $(".navbar-toggler-icon").click(function () {
    $(this).toggleClass("navbar_close");
  });

  // ======= hide menubar click on nav link =========
  $(".nav-link").click(function () {
    $("#navbarNav").removeClass("show");
    $(".navbar-toggler-icon").removeClass("navbar_close");
  });
  // ========== section close =========
  $(".about__links").click(function () {
    $("#about").addClass("about__top");
  });
  $(".about__close").click(function () {
    $("#about").removeClass("about__top");
  });
  // ===================================
  $(".resume__links").click(function () {
    $("#resume").addClass("resume__top");
  });
  $(".resume__close").click(function () {
    $("#resume").removeClass("resume__top");
  });
  // ===================================

  $(".portfolio__links").click(function () {
    $("#portfolio").addClass("portfolio__top");
  });
  $(".portfolio__close").click(function () {
    $("#portfolio").removeClass("portfolio__top");
  });
  // ===================================

  $(".blog__links").click(function () {
    $("#blog").addClass("blog__top");
  });
  $(".blog__close").click(function () {
    $("#blog").removeClass("blog__top");
  });
  // ===================================

  $(".contact__links").click(function () {
    $("#contact").addClass("contact__top");
  });
  $(".contact__close").click(function () {
    $("#contact").removeClass("contact__top");
  });

  // ========== portfolio active menu ========
  $(".list__btn").click(function () {
    $(this).addClass("btn__active").siblings().removeClass("btn__active");
  });
});
// ========= form validation ======
let username = document.querySelector(".name");
let email = document.querySelector(".email");
let subject = document.querySelector(".subject");
let text = document.querySelector(".text");
let btn = document.querySelector(".form__btn");
let msg = document.querySelector(".error__msg");
let mail_valid =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let nameerr = document.querySelector(".name__err");
let mailerr = document.querySelector(".mail__err");
let suberr = document.querySelector(".sub__err");
let texterr = document.querySelector(".text__err");

function SendEmail() {
  if (username.value === "") {
    nameerr.innerHTML = "Type your full name";
    nameerr.style.color = "red";
    username.style.borderBottom = "2px solid red";
  } else {
    nameerr.innerHTML = "";
  }

  if (email.value === "") {
    mailerr.innerHTML = "Type your valid email";
    mailerr.style.color = "red";
  } else {
    if (email.value.match(mail_valid)) {
      mailerr.innerHTML = "";
    } else {
      mailerr.innerHTML = "Your email is not valid";
    }
  }

  if (subject.value === "") {
    suberr.innerHTML = "Type a subject";
    suberr.style.color = "red";
  } else {
    suberr.innerHTML = "";
  }

  if (text.value === "") {
    texterr.innerHTML = "Type your message";
    texterr.style.color = "red";
  } else {
    texterr.innerHTML = "";
  }
  // Create an object to store the values
  var bodyValues = {
    Name: username.value,
    Email: email.value,
    Subject: subject.value,
    Message: text.value,
  };
  console.log(bodyValues);
  // Format the values in the email body
  var body = "";
  for (var key in bodyValues) {
    if (bodyValues.hasOwnProperty(key)) {
      body += key + ": " + bodyValues[key] + "<br>";
    }
  }
  // Check if all fields are valid before sending the email
  if (
    nameerr.innerHTML === "" &&
    mailerr.innerHTML === "" &&
    suberr.innerHTML === "" &&
    texterr.innerHTML === ""
  ) {
    // Configure SMTPJS with your SMTP service provider credentials
    Email.send({
      SecureToken: "4e8111f5-eaf4-4d98-aeb7-392791102ad2", // Replace with your SMTPJS token
      To: "raselshrf2016@gmail.com",
      From: "raselshrf2016@gmail.com",
      Subject: subject.value,
      Body: body,
    }).then(function (message) {
      if (message === "OK") {
        alert("Email sent successfully!");
        // Clear input fields
        username.value = "";
        email.value = "";
        subject.value = "";
        text.value = "";
      } else {
        alert("Error sending email. Please try again later.");
      }
    });
  }
}

// SecureToken: "4e8111f5-eaf4-4d98-aeb7-392791102ad2"

// ============= slick slider ==========
$(".slick__slider").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  appendDots: $(".testi__dots"),
  centerMode: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2500,
      },
    },
  ],
});

// ========= venobox youtube video =======
new VenoBox({
  selector: ".my-video-links",
});
