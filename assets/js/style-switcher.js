$('.style-switcher__control').on('click', function () {
    $('.style-switcher').toggleClass('style-switcher--active');
});

$('.style-switcher__link--color').click(function (){
    $('link[href="assets/css/monochrome.css"]').attr('href','assets/css/color.css');
    console.log('dsdsf');
});
$('.style-switcher__link--mono').click(function (){
    $('link[href="assets/css/color.css"]').attr('href','assets/css/monochrome.css');
    console.log('dsdsf');
});