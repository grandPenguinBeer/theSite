$(document).ready(function () {
   $(window).on('scroll', function () {
        if ($(this).scrollTop() > 90) {
            $('header').css('background-color', '#191919')
        } else {
            $('header').css('background-color', 'transparent')
        }
   })
});