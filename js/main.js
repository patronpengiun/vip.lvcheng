$(window).scroll(
    function() {
        if ($(window).scrollTop() > 600) {
            $('#hidden-nav').attr('class', 'float-nav show');
        } else {
            $('#hidden-nav').attr('class', 'float-nav hidden');
        }
    }
);

$(document).ready(function() {
  $('.float-qr .close').click(function() {
    $('.float-qr').hide();
  })
});