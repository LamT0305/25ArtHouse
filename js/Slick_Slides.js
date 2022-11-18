$(document).ready(function () {
    $('div.image-items').slick({
        SlideToShow: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type='button' class='slick-prev slick-arrows'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrows'><ion-icon name="arrow-forward-outline"></ion-icon></button>`
    });
});