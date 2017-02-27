(function() {
    //$(function() {
        //$('.progress > .determinate').css('width', '0%')
    //})

    $(function() {
        $('select').material_select();
        $('#new-expenditure').keypress(function(e) {
            var amount = parseInt($(this).val());
            if (e.which === 13) {
                var budgetLimit = parseInt($('#limit').text());
                var currentSpent = parseInt($('#spent').text());
                var currentSavings = parseInt($('#savings').text());
                $('#spent').text(currentSpent + amount);
                $('#savings').text(currentSavings - amount);
                var percent = 100 * (budgetLimit - currentSpent - amount) / budgetLimit;
                

                var $progressBarBackground = $('.progress');
                var $progressBar = $('.progress > .determinate');
                $progressBar.css('width',  percent + '%');
                if (percent < 20) {
                    $progressBarBackground.removeClass('green lighten-3');
                    $progressBarBackground.removeClass('yellow lighten-4');
                    $progressBarBackground.addClass('red lighten-3');

                    $progressBar.removeClass('green');
                    $progressBar.removeClass('yellow darken-1');
                    $progressBar.addClass('red');
                }
                else if (percent < 50) {
                    $progressBarBackground.removeClass('green lighten-3');
                    $progressBarBackground.removeClass('yellow lighten-4');
                    $progressBarBackground.addClass('yellow lighten-4');

                    $progressBar.removeClass('green');
                    $progressBar.removeClass('red');
                    $progressBar.addClass('yellow darken-1');
                }

                $('#new-expenditure').val('');
            }
        });
    });
}());
