// 视频弹窗
function openvideo(src) {
    var video = $('.videobox1 video')[0];
    $('.videomark1,.videobox1').fadeIn(600);
    $('.videobox1 video').attr('src', src);
    video.play();
}
function closevideo(){
    var video = $('.videobox1 video')[0];
    video.pause();
    $('.videobox1 video').attr('src', '');
    $('.videomark1,.videobox1').fadeOut(600);
}
// 视频弹窗2
function openvideo2(src) {
    $('.videomark2,.videobox2').fadeIn(600);
    $('#iframe_v').attr('src', src);
}
function closevideo2(){
    $('#iframe_v').attr('src', '');
    $('.videomark2,.videobox2').fadeOut(600);
}

// header 下滑隐藏
function scroll() {
    var top1 = 0;
    var top2 = $(window).scrollTop();
    if (top2 > 0) {
        $("header").addClass("scroll").removeClass('on')
    } else {
        $("header").removeClass("scroll").addClass('on')
    }
    if (top2 == 0) {
        $("header").removeClass("scroll").removeClass('on')
    }
    $(window).scroll(function () {
        var top3 = $(window).scrollTop();
        if (top3 > top1) {
            $("header").addClass("scroll").removeClass('on')
        } else {
            $("header").removeClass("scroll").addClass('on')
        }
        if (top3 == 0) {
            $("header").removeClass("scroll").removeClass('on')
        }
        top1 = top3;
    })
}

$(function () {
    // scroll();
    // header搜索
    $('.open_search').click(function(){
        $(this).siblings('.search_box').slideDown();
    })
    $('.close_search').click(function(){
        $(this).parent('.search_box').slideUp();
    })
    // 移动端 header
    $('.open_nav').click(function () {
        $(this).toggleClass('on');
        $('.h_bot').slideToggle();
    })
    $('.h_bot .a1 .i1').click(function(){
        $(this).parents('.top').toggleClass('on');
        $(this).parents('.a1').find('.box').slideToggle();
        $(this).parents('li').siblings().removeClass('on').find('.top,.top2').removeClass('on');
        $(this).parents('li').siblings().find('.box,.box2').slideUp();
    })
    $('.h_bot .a2 .i2').click(function(){
        $(this).parents('.top2').toggleClass('on');
        $(this).parents('.a2').find('.box2').slideToggle();
        $(this).parents('.a2').siblings().find('.top2').removeClass('on');
        $(this).parents('.a2').siblings().find('.box2').slideUp();
    })

    // wow
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 50,
            mobile: true,
            live: true
        });
        wow.init();
    };

    $('.sztd').countUp();

    $('.md_a').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on')
        var id = $(this).attr('href').split('#')[1]
        var $id = $('#' + id)
        var idTop = $id.offset().top
        $("html,body").stop().animate({ scrollTop: idTop }, 600);
    })

    $(".go_top").click(function () {
        $("html,body").animate({ "scrollTop": 0 }, 1000);
    });
    
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if( top > 500){
            $(".go_top").addClass('on')
        } else {
            $(".go_top").removeClass('on')
        }
    })
})