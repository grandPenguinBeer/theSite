$(document).ready(function () {
   $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('header').css('background-color', 'black')
        } else {
            $('header').css('background-color', 'transparent')
        }
   });

   var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        offset: 83
    });
});
