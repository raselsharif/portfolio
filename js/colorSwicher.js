
$(function () {
    $("#white").click(white);

    function white() {
        $("#banner, .banner__main__heading,p,a,h1,h2,h3,h4,h5,h6,#about,#resume,#portfolio,#blog,#contact,.about__card,.testi__card,.plan__card, .form input, textarea, .slick-dots button,.resume__card,.close__btn,.list__main, .resume__items").toggleClass("white");
    }
})
