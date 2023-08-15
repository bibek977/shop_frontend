$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots:false,
        nav: true,
        navText: ['<i class="btn border border-2 border-secondary rounded-5  fs-4 ">&larr;</i>', '<i class="btn border border-2 border-secondary fs-4 rounded-5 ">&rarr;</i>'],
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1.5
            },
            800:{
                items : 2
            },
            1000: {
                items: 2.5
            },
            1200:{
                items:3.5
            },
            1400: {
                items: 4.5
            }
        }
    })
})