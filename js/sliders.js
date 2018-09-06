
$(document).ready(function () {
    var count = 1;
    var imgPerSlide = 5;

    var widthOfImg = $('.slider-content img').width() + 4;
    console.log(widthOfImg);
    $('.slider-content img').each(function () {
        count++;
    });
    var page = Math.floor(count/imgPerSlide) -1;
    console.log(page);
    var widthToSlide = parseFloat(widthOfImg) * imgPerSlide;
    var startPosition = 0;
    var maxSlideWidth = page * widthToSlide;
    console.log(maxSlideWidth);

        createFooterSlider();

    function createFooterSlider() {
        var maxWidth = parseFloat(widthOfImg) * parseFloat(count);
        $('.slider-content').css('width',maxWidth+'px');
    }

    $('.navigation-left').bind('click',function () {
        startPosition = startPosition + widthToSlide;
        if(startPosition>0){
            startPosition =0;
        }
        $('.slider-content').css('transform','translateX('+startPosition+'px)');
    });

    $('.navigation-right').bind('click',function () {
        startPosition = startPosition + widthToSlide;
        if(startPosition > maxSlideWidth){
            startPosition = maxSlideWidth;
        }
        $('.slider-content').css('transform','translateX(-'+startPosition+'px)');
    });


})