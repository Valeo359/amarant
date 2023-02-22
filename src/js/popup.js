$(document).ready(function(){
    //footer popup

    $('.footer-background').on('click', function(e){
        if(!e.target.closest('.contacts')){
            $('.map-popup').addClass('show');
            $('body').addClass('no-scroll');
        }
    })

    /* ==========================================
    ------------common popup code---------------- 
    =============================================*/

    $('.popup').on('click', function(e){
        if(!e.target.closest('.popup-content') || e.target.closest('.popup-close')){
            $(this).removeClass('show');
            $('body').removeClass('no-scroll');
        }
    });

    // just add to btn data-popup="popup-class"
    
    $('[data-popup]').on('click', function(){
        const popup = $(this).data('popup');
        $(`[class*="popup"]`).removeClass('show');
        $('body').removeClass('no-scroll');

        $(`.${popup}`).addClass('show');
        $('body').addClass('no-scroll');
    });

    /* 
    =========================================
    ----------------callback-----------------
    =========================================
    */

    //date
    const inputDate = $('#call-back-form input[type="date"]');
    if(inputDate){
        const date = new Date();
        const month = (date.getMonth() + 1) >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
        const day = (date.getDate()) >= 10 ? date.getDate() : '0' + date.getDate();
    
        const min = `${date.getFullYear()}-${month}-${day}`
        const max = `${date.getFullYear() + 1}-${month}-${day}`;
        inputDate.attr('min', min);
        inputDate.attr('max', max);
    }
    

    // input number
    if($('input[type="number"]')){
        $('.add, .minus').on('click', function(e) {
            const isNegative = $(e.target).closest('.minus').is('.minus');
            const input = $(e.target).closest('.number-input').find('input');
            if (input.is('input')) {
              input[0][isNegative ? 'stepDown' : 'stepUp']()
            }
        });
        
        $('#call-back-form input[type="number"]').unbind('keyup change input paste').bind('keyup change input paste',function(e){
            let val = $(this).val();
            let valLength = val.length;
            const maxCount = $(this).attr('maxlength') ? $(this).attr('maxlength') : false;
            if(valLength>maxCount){
                $(this).val($(this).val().substring(0,maxCount));
            }
        }); 
        
        $('#call-back-form input[type="number"]').blur(function(){
            let val = $(this).val();
            let valLength = val.length;
    
            if(valLength < 2 && val > 0){
                $(this).val("0" + $(this).val())
                return true;
            }
        });
        
        $('#call-back-form input').on('input', function(){
            let val = $(this).val();
            let valLength = val.length;
            const maxCount = $(this).attr('maxlength') ? $(this).attr('maxlength') : false;
            if(maxCount){
                if(valLength == maxCount){
                    $(this).parent().next().find('input').focus()
                }
            }
        });
    }


    // phone number

    function phoneFormat(elem) {
        let input = elem.value;
        input = input.replace(/\D/g,'');
        var size = input.length;
        if (size >= 4) {input = "+" + input.slice(0,3) + " (" + input.slice(3)}
        if (size >= 7) {input = input.slice(0,8) + ") " + input.slice(8)}
        if (size >= 11) {input = input.slice(0,13) + " " + input.slice(13)}
        if (size >= 13) {input = input.slice(0,13) + " " + input.slice(13)}
        return elem.value = input;
    }
    
    const tel = $('input[type="tel"]');

    if(tel){
        $('input[type="tel"]').on('input', function(){
            phoneFormat(this);
        })   
    }

    //courses popups

    $('.courses-popups .online-entry').on('click', function(){
        const dataCategory = $(this).data('category');
        const dataCourses = $(this).data('name');
        const categoryName = $('.education-entry-popop .courses-category');
        const coursesName = $('.education-entry-popop .courses-name');

        categoryName.html(dataCategory);
        coursesName.html(dataCourses);
    })
})