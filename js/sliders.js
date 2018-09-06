// Footer slider with publications
$(document).ready(function () {
    var count = 1;
    var imgPerSlide = 5;

    var widthOfImg = $('.slider-content img').outerWidth(true) +4;

    $('.slider-content img').each(function () {
        count++;
    });
    if(count<=6){
        $('.navigation').css('visibility','hidden');
    }
    var page = Math.round(count/imgPerSlide) -1;
    var widthToSlide = parseFloat(widthOfImg) * imgPerSlide;
    var startPosition = 0;
    var maxSlideWidth = page * widthToSlide;


        createFooterSlider();

    function createFooterSlider() {
        var maxWidth = parseFloat(widthOfImg) * parseFloat(count);
        $('.slider-content').css('width',maxWidth+'px');
    }

    $('.navigation-left').bind('click',function () {
        startPosition = startPosition + widthToSlide;
        console.log(startPosition);
        if(startPosition>0){
            startPosition =0;
        }
        $('.slider-content').css('transform','translateX('+startPosition+'px)');
    });

    $('.navigation-right').bind('click',function () {
        startPosition = startPosition - widthToSlide;
        console.log(startPosition);
        if(-startPosition > maxSlideWidth){
            startPosition = -maxSlideWidth;
        }
        $('.slider-content').css('transform','translateX('+startPosition+'px)');
    });


});

//Slider with dynamic height

$(document).ready(function () {
    var heightOfOneThumbnail = $('.thumbnail-img img').outerHeight(true);
    var perPage = 3;
    var startPosition = 0;
    var count2 = 1;
    $('.slider-show-imgs img').each(function () {
        count2++;
    });
    var page = Math.round(count2/perPage) -1;
    var heightPerSlide = parseFloat(perPage) * parseFloat(heightOfOneThumbnail);
    var maxSlideHeight = page * heightPerSlide;
    console.log("Max: "+maxSlideHeight);

    $('.nav-slider-up').bind('click',function () {
        startPosition = startPosition + heightPerSlide;
        console.log(startPosition);
        if(startPosition>0){
            startPosition =0;
        }
        $('.slider-show-imgs').css('transform','translateY('+startPosition+'px)');
    });

    $('.nav-slider-down').bind('click',function () {
        startPosition = startPosition -  heightPerSlide;
        console.log(startPosition);
        if(-startPosition > maxSlideHeight ){
            startPosition = -maxSlideHeight ;
        }
        $('.slider-show-imgs').css('transform','translateY('+startPosition+'px)');
    });
    $('.dynamic-new-article-slider .thumbnail-img').each(function () {
        var startImg = $('.dynamic-new-article-slider .thumbnail-img').attr('data-img');
        var startTitle =$('.dynamic-new-article-slider .thumbnail-img').attr('title');
        var startHref = $('.dynamic-new-article-slider .thumbnail-img').attr('href');
        $('.slider-show-img a').attr('href',startHref);
        $('.slider-dynamic-text p').text(startTitle);
        $('.slider-show-img img').attr('src',startImg);
        $(this).bind('click',function () {
            $('.dynamic-new-article-slider .thumbnail-img').each(function () {
                $(this).removeClass('active');
            })
            var title = $(this).attr('title');
            var href = $(this).attr('data-href');
            var img = $(this).attr('data-img');
            $(this).addClass('active');
            $('.slider-show-img a').attr('href',href);
            $('.slider-dynamic-text p').text(title);
            $('.slider-show-img img').attr('src',img);

        })
    })
})