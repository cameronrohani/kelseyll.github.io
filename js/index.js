$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 200){
            $('.arrow').addClass('arrow-fade');
        }
        else {
          $('.arrow').removeClass('arrow-fade');
        }
    });
});
