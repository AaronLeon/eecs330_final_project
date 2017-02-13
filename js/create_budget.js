(function() {
    $(function() {
        attachEntryHandlers();

        $('#budget-limit').keypress(function(e) {
            if (e.which === 13) {
                e.preventDefault();
                var budget = $(this).val();
                $(this).parents('div:first')
                    .replaceWith('<h2>' + 'Budget Limit: $' +  budget + '</h2>');
            }
        });

        $('#add').click(function(e) {
            $('tbody').append(entryHTML);
            $('select').material_select();
            attachHandlers();
        });
    });

    function attachEntryHandlers() {
        $('select').material_select();

        $('.save').click(function(e) {
            var $entry = $(this).parents('.entry:first');
            category = capitalize($entry.find('select').val())
            name = capitalize($entry.find('input[name="name"]').val())
            amount = '$' + $entry.find('input[name="amount"]').val()

            var $entry = $(this).parents('.entry:first');
            $entry.empty();
            $entry.append('<td>' + category + '</td>' +
                '<td>' + name + '</td>' +
                '<td>' + amount + '</td>'
            );
        });

        $('.delete').click(function(e) {
            var $entry = $(this).parents('.entry:first');
            $entry.remove();
            console.log('hi')
        });
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    var entryHTML = [
        '<tr class="entry">',
        '    <td>',
        '        <select>',
        '            <option value="" disabled selected>Category</option>',
        '            <option value="Rent">Rent</option>',
        '            <option value="Food">Food</option>',
        '            <option value="Recreation">Recreation</option>',
        '        </select>',
        '    </td>',
        '    <td>',
        '        <input name="name" type="text" placeholder="Name" />',
        '    </td>',
        '    <td>',
        '        <input name="amount" type="number" placeholder="Amount" />',
        '    </td>',
        '    <td>',
        '        <button class="btn btn-flat waves-effect waves-light transparent save"><i class="material-icons positive" type="submit">check</i></button>',
        '        <button class="btn btn-flat waves-effect waves-light transparent delete"><i class="material-icons negative" type="submit">delete</i></button>',
        '    </td>',
        '</tr>'
    ].join('\n')
}());
