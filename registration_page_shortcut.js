/**
 * Created by sonnynguyen on 11/6/15.
 */

(function($) {
    $(document).ready(function ($) {
        $('#registerform').on('submit', function(e) {
            e.preventDefault();
            var _form_data = $(this).serialize(),
                _form_url = $(this).attr('action') || window.location.href;

            console.log(_form_data);
            console.log(_form_url);
            return;
            $.post( _form_url, _form_data, function( data ) {
                //console.log( data ); //
                // need to handle ajax here
            }, "json");

        });
    });
})(jQuery);
