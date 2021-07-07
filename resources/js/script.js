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
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });

    /* MOBILE NAV */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');

        nav.slideToggle(200);
        if (icon[0].name == 'reorder-four-outline') {
            icon[0].name = 'close-circle-outline'
        } else if (icon[0].name == 'close-circle-outline') {
            icon[0].name = 'reorder-four-outline'
        }


    });
});


