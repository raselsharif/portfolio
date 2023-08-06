
$(function () {
    $("#white").click(white);

    // function black() {
    //     $("#banner, .banner__main__heading,p,a,h1,h2,h3,h4,h5,h6,#about,#resume,#portfolio,#blog,#contact").addClass("black");
    // }

    function white() {
        $("#banner, .banner__main__heading,p,a,h1,h2,h3,h4,h5,h6,#about,#resume,#portfolio,#blog,#contact").toggleClass("white");
    }
})
