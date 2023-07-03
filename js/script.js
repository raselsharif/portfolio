// ======= aos js =======
AOS.init();

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

  $(".navbar-toggler-icon").click(function () {
    $(this).toggleClass("navbar_close");
  })

  // ======= hide menubar click on body =========
  $(".nav-link").click(function () {
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

// ========= form validation ======
let username = document.querySelector(".name");
let email = document.querySelector(".email");
let subject = document.querySelector(".subject");
let text = document.querySelector(".text");
let btn = document.querySelector(".form__btn");
let msg = document.querySelector(".error__msg");
let mail_valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
    "Name": username.value,
    "Email": email.value,
    "Subject": subject.value,
    "Message": text.value,
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
  if (nameerr.innerHTML === "" && mailerr.innerHTML === "" && suberr.innerHTML === "" && texterr.innerHTML === "") {
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


// function SendEmail() {
//   let username = document.querySelector(".name");
//   let email = document.querySelector(".email");
//   let subject = document.querySelector(".subject");
//   let text = document.querySelector(".text");
//   let nameerr = document.querySelector(".name__err");
//   let mailerr = document.querySelector(".mail__err");
//   let suberr = document.querySelector(".sub__err");
//   let texterr = document.querySelector(".text__err");
//   let mail_valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   if (username.value === "") {
//     nameerr.innerHTML = "Type your full name";
//     nameerr.style.color = "red";
//     username.style.borderBottom = "2px solid red";
//   } else {
//     nameerr.innerHTML = "";
//     username.style.borderBottom = "";
//   }

//   if (email.value === "") {
//     mailerr.innerHTML = "Type your valid email";
//     mailerr.style.color = "red";
//   } else {
//     if (email.value.match(mail_valid)) {
//       mailerr.innerHTML = "";
//     } else {
//       mailerr.innerHTML = "Your email is not valid";
//     }
//   }

//   if (subject.value === "") {
//     suberr.innerHTML = "Type a subject";
//     suberr.style.color = "red";
//   } else {
//     suberr.innerHTML = "";
//   }

//   if (text.value === "") {
//     texterr.innerHTML = "Type your message";
//     texterr.style.color = "red";
//   } else {
//     texterr.innerHTML = "";
//   }

//   // Check if all fields are valid before sending the email
//   if (nameerr.innerHTML === "" && mailerr.innerHTML === "" && suberr.innerHTML === "" && texterr.innerHTML === "") {
//     // Configure SMTPJS with your SMTP service provider credentials
//     Email.send({
//       SecureToken: "4e8111f5-eaf4-4d98-aeb7-392791102ad2", // Replace with your SMTPJS token
//       To: "raselshrf2016@gmail.com",
//       From: email.value,
//       Subject: subject.value,
//       Body: text.value,
//     }).then(function (message) {
//       if (message === "OK") {
//         alert("Email sent successfully!");
//         // Clear input fields
//         username.value = "";
//         email.value = "";
//         subject.value = "";
//         text.value = "";
//       } else {
//         alert("Error sending email. Please try again later.");
//       }
//     });
//   }
// }
// function sendEmail(){
//   Email.send({
//     SecureToken : "4e8111f5-eaf4-4d98-aeb7-392791102ad2",
//     To : email.value,
//     From : 'raselshrf2016@gmail.com',
//     Subject : subject.value,
//     Body : text.value
// }).then(
//   message => alert(message)
// );
// }






// SecureToken: "4e8111f5-eaf4-4d98-aeb7-392791102ad2"


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

// ========= venobox youtube video =======
new VenoBox({
  selector: '.my-video-links',
});


// =========== particle js ============
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 19,
      "density": {
        "enable": true,
        "value_area": 481.0236182596568
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 12
      },
      "image": {
        "src": "https://www.sprinklr.com/wp-content/themes/sprinklr/assets/images/logo_sprinklr.svg",
        "width": 250,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3286994724774322,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 47.34885849793636,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 9.59040959040959,
        "size_min": 5.594405594405594,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6.413648243462092,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 320.6824121731046,
        "rotateY": 481.0236182596568
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

