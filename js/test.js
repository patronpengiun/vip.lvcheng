$(window).scroll(
    function() {
        if ($(window).scrollTop() > 200) {
            $('#header').attr('class', 'float');
        } else {
            $('#header').attr('class', 'normal');
        }
    }
);