$(document).ready(function () {

    $('#esdiac_customer').slick({
        prevArrow: '#esdiac-arrow-prev',
        nextArrow: '#esdiac-arrow-next',
        dots: true,
        infinite: true,
        speed: 300,
        centerMode: false,
        centerPadding: '60px',
        arrows: true,
        autoPlay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 4850,
                settings: {
                    slidesToShow: 6,
                    centerMode: false,
                    centerPadding: '60px',
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 3850,
                settings: {
                    slidesToShow: 5,
                    centerMode: false,
                    centerPadding: '60px',
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '60px',
                    infinite: true,
                    dots: true,
                    autoPlay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '60px',
                    dots: true,
                    autoPlay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '60px',
                    dots: true,
                    autoPlay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '60px',
                    dots: true,
                    autoPlay: true,
                    autoplaySpeed: 1000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '60px',
                    dots: true,
                    autoPlay: true,
                    autoplaySpeed: 1000,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '60px',
                    dots: true,
                    autoPlay: true,
                    autoplaySpeed: 500,
                }
            }
        ]
    });

});


