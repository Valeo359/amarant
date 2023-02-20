$(document).ready(function(){
    if($('#call-back-form').length){
        $('#call-back-form').validate({
            rules: {
                hours: {
                    required: true,
                },
                minutes: {
                    required: true,
                }
            },
            messages: {
                hours: {
                    required: "Оберіть годину",
                    min: "Оберіть час з 09:00 до 18:00",
                    max: "Оберіть час з 09:00 до 18:00"
                },
                minutes: {
                    required: "Оберіть хвилину",
                    min: "Оберіть хвилину з 00 до 59",
                    max: "Оберіть хвилину з 00 до 59"
                }
            }
        });
    }

    if($('#entry-popup').length){
        $('#entry-popup').validate({
            rules: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                },
                phone: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "Введіть ім'я"
                },
                email: {
                    required: "Введіть email"
                },
                phone: {
                    required: "Веддіть номер телефону",
                    min: "Введіть повний номер телефону"
                }
            }
        })
    }
})  