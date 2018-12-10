$('#save-factor').click(function() {

    var obj = $(this), holder = $('#cur_form');

    var val = force_float($('#cur_factor')), curr = $('#currency_code').val() || '';
    obj.attr('disabled',true);
    $.post(
        holder.attr('data-action'),
        {'set_factor':val,'currency_code':curr,'change_factor':1},
        function(json) {
            obj.attr('disabled',false);
            if(json.err !== '') {
                alert(json.html);
            }
        },
        'json'
    );

});