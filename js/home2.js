(function() {
    //$(function() {
        //$('.progress > .determinate').css('width', '0%')
    //})

    $(function() {
        $('select').material_select();
        var budgetLimit = parseInt($('#limit').text());

        $('#new-expenditure-form').submit(function(e) {
            e.preventDefault();

            var category = $(this).find('#new-expenditure-category').val();
            var amount = parseInt($(this).find('#new-expenditure').val());

            updateProgressBar(category, amount);
            updateProgressBar('total', amount)

            $('#new-expenditure').val('');
        });
    });

    function updateProgressBar(category, amount) {
        var categoryLimit = parseInt($('#' + category + '-progress ~ .right > span').text());
        var currentSavings = parseInt($('label[for="' + category + '-progress"] > span').text());

        currentSavings -= amount;
        $('label[for="' + category + '-progress"] > span').text(currentSavings);

        var percent = 100 * currentSavings / categoryLimit;

        console.log(category)

        var $progressBarBackground = $('#' + category + '-progress.progress');
        var $progressBar = $progressBarBackground.find('.determinate');
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
    }
}());
