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
    $('.dynamic-new-article-slider').each(function () {
        var id = $(this).data('id');
        console.log(id);
        var heightOfOneThumbnail = $('.thumbnail-img img').outerHeight(true);
        var perPage = 3;
        var startPosition = 0;
        var count2 = 1;
        $('.dynamic-new-article-slider[data-id="'+id+'"] .slider-show-imgs img').each(function () {
            count2++;
        });
        var page = Math.round(count2/perPage) -1;
        var heightPerSlide = parseFloat(perPage) * parseFloat(heightOfOneThumbnail);
        var maxSlideHeight = page * heightPerSlide;
        console.log("Max: "+maxSlideHeight);

        $('.dynamic-new-article-slider[data-id="'+id+'"] .nav-slider-up').bind('click',function () {
            startPosition = startPosition + heightPerSlide;
            console.log(startPosition);
            if(startPosition>0){
                startPosition =0;
            }
            $('.dynamic-new-article-slider[data-id="'+id+'"] .slider-show-imgs').css('transform','translateY('+startPosition+'px)');
        });

        $('.dynamic-new-article-slider[data-id="'+id+'"] .nav-slider-down').bind('click',function () {
            startPosition = startPosition -  heightPerSlide;
            console.log(startPosition);
            if(-startPosition > maxSlideHeight ){
                startPosition = -maxSlideHeight ;
            }
            $('.dynamic-new-article-slider[data-id="'+id+'"] .slider-show-imgs').css('transform','translateY('+startPosition+'px)');
        });
        $('.dynamic-new-article-slider[data-id="'+id+'"] .thumbnail-img').each(function () {
            var startImg = $(this).attr('data-img');
            var startTitle =$(this).attr('title');
            var startHref = $(this).attr('href');
            $('.dynamic-new-article-slider[data-id="'+id+'"] .slider-show-img a').attr('href',startHref);
            $('.dynamic-new-article-slider[data-id="'+id+'"] .slider-dynamic-text p').text(startTitle);
            $('.dynamic-new-article-slider[data-id="'+id+'"] .slider-show-img img').attr('src',startImg);
            $(this).bind('click',function () {
                $('.dynamic-new-article-slider[data-id="'+id+'"] .thumbnail-img').each(function () {
                    $(this).removeClass('active');
                })
                var title = $(this).attr('title');
                var href = $(this).attr('data-href');
                var img = $(this).attr('data-img');
                $(this).addClass('active');
                $('.dynamic-new-article-slider[data-id="'+id+'"] .slider-show-img a').attr('href',href);
                $('.dynamic-new-article-slider[data-id="'+id+'"] .slider-dynamic-text p').text(title);
                $('.dynamic-new-article-slider[data-id="'+id+'"] .slider-show-img img').attr('src',img);

            })
        })
    });
});

//Photogalery slider article


$(document).ready(function () {
    $('.photogalery-article').each(function () {
        var id = $(this).data('id');
        var widthOfOneThumbnail = $('.photogalery-article[data-id="'+id+'"] .photogalery-show-imgs .thumbnail-img img').outerWidth(true);
        var perPage = 3;
        var startPosition = 0;
        var count2 = 1;
        $('.photogalery-article[data-id="'+id+'"] .photogalery-show-imgs img').each(function () {
            count2++;
        });
        var page = Math.round(count2/perPage) -1;
        var widthPerSlide = parseFloat(perPage) * parseFloat(widthOfOneThumbnail);
        var maxSlideWidth = page * widthPerSlide;
        console.log("Max: "+ maxSlideWidth);

        $('.photogalery-article[data-id="'+id+'"] .nav-slider-left').bind('click',function () {
            startPosition = startPosition + widthPerSlide;
            console.log(startPosition);
            if(startPosition>0){
                startPosition =0;
            }
            $('.photogalery-article[data-id="'+id+'"] .photogalery-show-imgs-container').css('transform','translateX('+startPosition+'px)');
        });

        $('.photogalery-article[data-id="'+id+'"] .nav-slider-right').bind('click',function () {
            startPosition = startPosition -  widthPerSlide;
            console.log(startPosition);
            if(-startPosition > maxSlideWidth ){
                startPosition = -maxSlideWidth ;
            }
            $('.photogalery-article[data-id="'+id+'"] .photogalery-show-imgs-container').css('transform','translateX('+startPosition+'px)');
        });
        $('.photogalery-article[data-id="'+id+'"] .photogalery-show-imgs .thumbnail-img').each(function () {
            var startImg = $('.photogalery-article[data-id="'+id+'"] .photogalery-show-imgs .thumbnail-img').attr('data-img');
            var startTitle =$('.photogalery-article[data-id="'+id+'"] .photogalery-show-imgs .thumbnail-img').attr('title');
            var startHref = $('.photogalery-article[data-id="'+id+'"] .photogalery-show-imgs .thumbnail-img').attr('href');
            $('.photogalery-article[data-id="'+id+'"] .photogalery-show-img a').attr('href',startHref);
            $('.photogalery-article[data-id="'+id+'"] .photogalery-dynamic-text p').text(startTitle);
            $('.photogalery-article[data-id="'+id+'"].photogalery-show-img img').attr('src',startImg);
            $(this).bind('click',function () {
                $('.photogalery-article[data-id="'+id+'"] .photogalery-show-imgs .thumbnail-img').each(function () {
                    $(this).removeClass('active');
                })
                var title = $(this).attr('title');
                var href = $(this).attr('data-href');
                var img = $(this).attr('data-img');
                $(this).addClass('active');
                $('.photogalery-article[data-id="'+id+'"] .photogalery-show-img a').attr('href',href);
                $('.photogalery-article[data-id="'+id+'"] .photogalery-dynamic-text p').text(title);
                $('.photogalery-article[data-id="'+id+'"] .photogalery-show-img img').attr('src',img);

            })
        })
    })
});