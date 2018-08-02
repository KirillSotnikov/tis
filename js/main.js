$(document).ready(function () {
    // ------------------------MAIN PAGE------------------------
    $('.slider-title').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="arrow left"><img src="img/icons/left-arrow.svg"></div>',
        nextArrow: '<div class="arrow right"><img src="img/icons/right-arrow.svg"></div>',
    });
    $('.slider-about').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="arrow left"><img src="img/icons/left-arrow.svg"></div>',
        nextArrow: '<div class="arrow right"><img src="img/icons/right-arrow.svg"></div>',
    });
    $('.slider-reviews').slick({
        dots: false,    
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '350px',
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.slider-text',
        prevArrow: '<div class="arrow left"><img src="img/icons/left-arrow-gr.svg"></div>',
        nextArrow: '<div class="arrow right"><img src="img/icons/right-arrow-gr.svg"></div>',
    }); 
    $('.slider-reviews-small').slick({
        dots: false,    
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-text',
        prevArrow: '<div class="arrow left"><img src="img/icons/left-arrow-gr.svg"></div>',
        nextArrow: '<div class="arrow right"><img src="img/icons/right-arrow-gr.svg"></div>',
    }); 
    $('.slider-text').slick({
        dots: false,    
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-reviews',
        asNavFor: '.slider-reviews-small',
        prevArrow: '<div class="arrow left"><img src="img/icons/left-arrow-gr.svg"></div>',
        nextArrow: '<div class="arrow right"><img src="img/icons/right-arrow-gr.svg"></div>',
    }); 
    $('.slider-gallery').slick({
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '150px',
        focusOnSelect: true,
        // prevArrow: '<div class="arrow left"><img src="img/icons/left-arrow.svg"></div>',
        // nextArrow: '<div class="arrow right"><img src="img/icons/right-arrow.svg"></div>',
    });
    $('.slider-gallery-small').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="arrow left"><img src="img/icons/left-arrow-gr.svg"></div>',
        nextArrow: '<div class="arrow right"><img src="img/icons/right-arrow-gr.svg"></div>',
    });
    // ------------------------MAIN PAGE END------------------------


});
$('.call-back .bg').click(function() {
    $('.call-back').toggleClass('active');
});
$('.call-back .call-back-img').click(function() {
    $('.call-back').toggleClass('active');
});
$('.call-back .form img').click(function() {
    $('.call-back').removeClass('active');
});
$('.mobile-menu .menu-btn').click(function() {
    $('.mob-menu').addClass('active');
    $('.mobile-menu .menu-btn').hide();
});
$('.mob-menu .close').click(function() {
    $('.mob-menu').removeClass('active');
    $('.mobile-menu .menu-btn').show();
});
$('.mobile-menu .call-img').click(function() {
    $('.call-back_mob').toggleClass('active');
});
$('.call-back_mob .form img').click(function() {
    $('.call-back_mob').removeClass('active');
});
 // PARALLAX
 $(window).scroll(function() {
    var st = $(this).scrollTop();
    
    $('.parallax .par-item').css({
        "transform" : "translate(0%, " + st /8 + "%"
    });
    $('.parallax .par-under-item').css({
        "transform" : "translate(0%, " + st /-6 + "%"
    });
    
});
// PARALLAX