$(function() {
    $('.main-nav').hide();
});

$(window).scroll(function(){  
    posScroll = $(document).scrollTop();  
    if (posScroll >= 30) {
        $('.main-nav').slideDown(400, 'swing');  
    } else  
        $('.main-nav').slideUp(400, 'swing');  
});