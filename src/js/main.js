document.addEventListener('DOMContentLoaded', function(){    
    $('.mobile-menu-btn').on('click', function(){
        $('.header-nav-list').addClass('show');
        $('body').addClass('no-scroll');
    })

    $('.mobile-close-btn').on('click', function(){
        $('.header-nav-list').removeClass('show');
        $('body').removeClass('no-scroll')
    })

    

    // faq
    $('.accardion-item').on('click', function(){
        const elemContent = $(this).find('.accardion-content');
        const height = elemContent.prop('scrollHeight');

        if($(this).hasClass('show')){
            $(this).removeClass('show');
            elemContent.css({"maxHeight":""});
        } else {
            $(this).addClass('show');
            elemContent.css({"maxHeight":`${height}px`});
        }
    });
    
    // smooth scroll to anchor

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
})