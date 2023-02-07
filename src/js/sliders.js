$(document).ready(function(){
    $('.price-main-slider-list').slick({
        centerMode: true,
        prevArrow: '.price-main-slider-buttons .prev',
        nextArrow: '.price-main-slider-buttons .next',
        slidesToShow: 3,
        focusOnSelect: true,
        infinite: true,
        asNavFor: '.price-slider-popup',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    })
    
    $('.price-slider-popup').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.popup-slider-buttons .prev',
        nextArrow: '.popup-slider-buttons .next',
        asNavFor: '.price-main-slider-list',
        accessibility: false,
    });
    
    $('.price-main-slider-item').on('click', function(){
        $('.price-popup').addClass('show');
        $('body').addClass('no-scroll');
    });

    // courses slider

    $('.courses-slider').on('init', function(event, slick){
        $('.slider-counter .current-number').text("0" + `${slick.currentSlide + 1}`);
        $('.slider-counter .total-number').text("0" + `${slick.slideCount}`);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging : function(slider, i) {
            var slidernav = $(slider.$slides[i]).data('slidernav');
            return '<a>'+slidernav+'</a>';
        },
        dots: true,
        infinite: false,
        accessibility: false,
        arrows: true,
        prevArrow: $('.courses-slider-wrapper .prev'),
        nextArrow: $('.courses-slider-wrapper .next'),
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.slider-counter .current-number').text("0" + `${nextSlide + 1}`);
    })


    // see all prices

    function setHeight(element){
        const elemHeight = element.offsetHeight;
        $('.full-price-list .slick-list').attr('style', `max-height: ${elemHeight}px`);
    }

    $('.full-price-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a class="dot">'+(i+1)+'</a>';
        },
        arrows: true,
    })
    .on('afterChange', function(event, slick, currentSlide){
        setHeight(slick.$slides.get(currentSlide));
    })

    const firstSlide = document.querySelector('.full-price-item.slick-current');
    setHeight(firstSlide);
})