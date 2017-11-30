$(document).ready(function() {
    var scrollOptions;

    if (window.innerWidth > 1000) {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 50) {
                $('header').css('background-color', 'black')
            } else {
                $('header').css('background-color', 'transparent')
            }
        });

        scrollOptions = {
            speed: 1000,
            offset: 83
        };
    } else {
        scrollOptions = {
            speed: 1000,
            offset: 60
        };
    }

    var scroll = new SmoothScroll('a[href*="#"]', scrollOptions);
});
