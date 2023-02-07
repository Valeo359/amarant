$(document).ready(function(){
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
})  