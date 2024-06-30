window.addEventListener('scroll', function () {
    let top = window.scrollY;
    console.log(top);
    if (top > 200) {
        $('.main').css('transform', 'translateY(-300px)');
    } else {
        $('.main').css('transform', 'translateY(0%)');
    }
});
