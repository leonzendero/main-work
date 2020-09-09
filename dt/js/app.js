var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

$('#myTab').on('shown.bs.tab', function (e) {
    $('#myTab li').each(function () {
        if ($(this)[0] !== e.target) {
            $(this).removeClass('active');
        }
    });
});