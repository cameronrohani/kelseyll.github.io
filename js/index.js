$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 200){
        $('.arrow').addClass('arrow-fade');
    }
    else {
      $('.arrow').removeClass('arrow-fade');
    }
});
var $slider = $('.slider').find('.screen');
var i = 0;
recursive();
setInterval(recursive, 4000);

function recursive() {
  $slider.removeClass('showing').eq(i).addClass('showing');
  i = (++i % $slider.length);
}
$('.list a').hover(function(){
    $(this).find('i').toggleClass('list-hover-move');
    $(this).find('p').toggleClass('list-hover-color');
});
