$(function() {
        $('.top').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

    $(".header-nav a").mPageScroll2id({
        offset: -50,
        scrollSpeed: 800
    });

  $('.home-carousel').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    dots: false,
    items: 1,
    margin: 18,
    stagePadding: 50,
    responsive: {
320: {
    items: 1,
    nav: false,
            margin: 0,
    stagePadding: 0,
},
480: {
    items: 1,
    nav: false,
        margin: 0,
    stagePadding: 0,
},
768: {
    items: 1,
    nav: false,
        margin: 0,
    stagePadding: 0,
},
992: {
    items: 1,
},
1200: {
    items: 1,
}
}

});

  // $('.owl-next').click(function() {
  //   $('.owl-carousel .owl-item.active .home-item').removeClass('home-item-white');
  //   $('.owl-carousel .owl-item.active .home-item').addClass('home-item-active');
  //   $('.owl-carousel .owl-item .home-item').addClass('home-item-white');
  //   // $('.owl-carousel .owl-item').removeClass('home-item-active');
  //   // $('.owl-carousel .owl-item.active').removeClass('home-item-active');
  // });



  $('.reviews-carousel').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    dots: false,
    items: 2,
    responsive: {
    320: {
        items: 1,
        nav: false,
    },
    480: {
        items: 1,
        nav: false,
    },
    768: {
        items: 2,
        nav: false,
    },
    992: {
        items: 2,
    },
    1200: {
        items: 2,
    }
}
  });

});
