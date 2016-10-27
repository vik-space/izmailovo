$(function() {
    function heightDetect() {
        if ($(window).height() > 800){
            $(".full_height").css("height", $(window).height());
        } else{
            $(".full_height").css("height", "800px");
        }
    }
    function indexContentMargin() {
        var MarginRight = ($(window).width() - 240) * 0.35;
// заменить 90 на 990
        if ($(window).height() > 90 && $(window).width() > 1280){
            $(".index_content").css("margin-right", MarginRight);
            $(".right_column").width(MarginRight);
            // console.log(MarginRight);
            // console.log($(window).width());
        } else{
            $(".index_content").css("margin-right", "416px");
            $(".right_column").width(416);

            // var WidthContent = $(window).width() - 240;
            // $(".index_content").css("margin-right", "0px");
            // $(".index_content").width(WidthContent);
            // $(".right_column").width(0);
        }

    };

    function margiTopH1FirstLayot() {
        var MarginTopH1 = $(window).height() / 2 - 130;
        if ($(window).height() > 990){
            $(".first_layout h1").css("padding-top", MarginTopH1);
        } else{
            $(".first_layout h1").css("padding-top", "300px");
        }
    }
    function HiddenItemAction() {
        if($(window).height() < 910){
            $(".item_action").css("display","none");
        } else{
            $(".item_action").css("display","block");
        }
    }
    margiTopH1FirstLayot();
    heightDetect();
    indexContentMargin();
    HiddenItemAction()
    $(window).resize(function() {
        heightDetect();
        margiTopH1FirstLayot();
        indexContentMargin();
        HiddenItemAction()
    });


    $('.slider').owlCarousel({
        items : 1,
        nav : true,
        loop : true,
        dots : false,
        autoplay : true,
        autoplayTimeout : 5000,
        autoplayHoverPause :true,
        autoplaySpeed : 1500,
        navText : [,]

    });


});
