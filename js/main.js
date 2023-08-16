

const nextIcon = '<i class="btn border border-2 border-secondary rounded-5  fs-4 "><i class="fa-solid fa-arrow-left"></i></i>';
const prevIcon = '<i class="btn border border-2 border-secondary fs-4 rounded-5 "><i class="fa-solid fa-arrow-right"></i></i>'

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: [nextIcon, prevIcon],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1400: {
            items: 3.5
        }
    }
})