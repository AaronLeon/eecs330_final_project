(function() {
    //$(function() {
        //$('.progress > .determinate').css('width', '0%')
    //})

    $(function() {
        $('#new-expenditure').keypress(function(e) {
            console.log('hi')
            var amount = parseInt($(this).val());
            if(e.which === 13) {
                var budgetLimit = parseInt($('#limit').text());
                var currentSpent = parseInt($('#spent').text());
                var currentSavings = parseInt($('#savings').text());
                $('#spent').text(currentSpent + amount);
                $('#savings').text(currentSavings - amount);
                var percent = 100 * (currentSpent + amount) / budgetLimit;
                $('.progress > .determinate').css('width',  percent + '%');

                $('#new-expenditure').val('');
            }
        });
    });
}());
