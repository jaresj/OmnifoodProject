$(document).ready(function() {

        /* For the sticky navigation */
    var waypoint = new Waypoint({
        element: $('.js--section-features'),
        handler: function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }, offset: '60px;'
    })
  
    /* Scroll on buttons */
    $('.js--scroll-to-plan').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);

    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

    });

    /* Navigation Scroll */

    $("a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });

    /* Animations on Scroll */
    

});