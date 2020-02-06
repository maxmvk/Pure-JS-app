$('.bg').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();

    $('.intro-img').css(
        'transform',
        'translate(-' + x * 15 + 'px)'
    );
    $('.intro-player-main').css(
        'transform',
        'translate(' + x * 60 + 'px)'
    );
    $('.intro-truck').css(
        'transform',
        'translate(' + x * 40 + 'px)'
    );
    $('.intro-players-left').css(
        'transform',
        'translate(-' + x * 25 + 'px)'
    );
    $('.intro-players-right').css(
        'transform',
        'translate(-' + x * 25 + 'px)'
    );
    $('.money-1').css(
        'transform',
        'translate(' + x * 40 + 'px)'
    );
    $('.money-2').css(
        'transform',
        'translate(' + x * 40 + 'px)'
    );
    $('.money-3').css(
        'transform',
        'translate(' + x * 40 + 'px)'
    );
    $('.money-4').css(
        'transform',
        'translate(' + x * 40 + 'px)'
    );
    $('.money-5').css(
        'transform',
        'translate(' + x * 40 + 'px)'
    );
    $('.money-6').css(
        'transform',
        'translate(' + x * 40 + 'px)'
    );
    $('.money-7').css(
        'transform',
        'translate(' + x * 40 + 'px)'
    );
});