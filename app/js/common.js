$(function () {

    function heightDetect() {
        if ($(window).height() > 800) {
            $(".full_height").css("height", $(window).height());
        } else {
            $(".full_height").css("height", "100vh");
            $(".right_column .item .description").css("padding-top", "50px");
            $(".right_column .item .description").css("padding-bottom", "8px");
            $(".right_column .item .caption").css("display", "none");
        }
    }



    function indexContentMargin() {
        var MarginRight = ($(window).width() - 240) * 0.35;
// заменить 90 на 990
        if ($(window).height() > 90 && $(window).width() > 1280) {
            $(".index_content").css("margin-right", MarginRight);
            $(".right_column").width(MarginRight);
        } else {
            if ($(window).width() > 1280) {
                $(".index_content").css("margin-right", "400px");
                $(".right_column").width($(window).width() - 240);
            }
        }
    };

    function margiTopH1FirstLayot() {
        var MarginTopH1 = $(window).height() / 2 - 130;
        if ($(window).width() > 480) {
            if ($(window).height() > 800) {
                $(".first_layout h1").css("padding-top", MarginTopH1);
            } else {
                if ($(window).height() < 800) {
                    $(".first_layout h1").css("padding-top", "170px");
                }
            }
        }
    }

    function HiddenItemAction() {
        if ($(window).height() < 910 && $(window).width() > 992) {
            $(".item_action").css("display", "none");
        } else {
            $(".item_action").css("display", "block");
        }
    }

    margiTopH1FirstLayot();
    heightDetect();
    indexContentMargin();
    HiddenItemAction();

    if($(window).width() > 1280){
        //setEqualHeight($(".b-about>.b-column"));
        setEqualHeight($(".banqueting_hall  .hotel_room"));
    }



    Add_Height_News_Column();
    replacePopupbyScroll();
    scroolly_CurrentBanquetHall();
    scroolly_Complex();
    if($(window).height() < 732){
        $(".action").css({"position" : "relative", "margin-top" : "25px"});
    } else {
        $(".action").css("position", "absolute");
    }
    $(window).resize(function () {
        scroolly_CurrentBanquetHall();
        scroolly_Complex();
        Add_Height_News_Column();
        heightDetect();
        margiTopH1FirstLayot();
        indexContentMargin();
        HiddenItemAction();
        replacePopupbyScroll();
        if($(window).height() < 732){
            $(".action").css({"position" : "relative", "margin-top" : "25px"});
        } else {
            $(".action").css("position", "absolute");
        }
        if($(window).width() > 1280){
            //setEqualHeight($(".b-about>.b-column"));
            setEqualHeight($(".banqueting_hall  .hotel_room"));
        }


    });


    $('.slider').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        navText: [,]
    });


    $(".SecondSection").mPageScroll2id({
        scrollSpeed: 700,
        scrollEasing: "easeInOutExpo",
        scrollingEasing: "easeInOutCirc"
    });



    $(".b-scroll-to-id").mPageScroll2id({
        scrollSpeed: 700,
        scrollEasing: "easeInOutExpo",
        scrollingEasing: "easeInOutCirc"
    });


    $(".article-item-link__next").mPageScroll2id({
        // autoScrollSpeed: true,
        scrollSpeed: 700,
        scrollEasing: "easeInOutExpo",
        scrollingEasing: "easeInOutCirc"
    });

    $(".popup").magnificPopup();

    $(window).scroll(function () {
        if ($(window).width() > 1280 && $('.b-col-info').height() != "" && 0) {

            if ($('.b-col-info').height() < $('.b-foto_room').height()) {
                if ($(window).scrollTop() > $('.b-col-info').height() - $(window).height()) {

                    $('.b-col-info').css("position", "fixed");
                    var MargiLeft = ($(window).width() - 240) / 2;
                    $('.b-col-info').css("margin-left", MargiLeft);
                    $('.b-col-info').width(MargiLeft);
                    if ($(window).scrollTop() + $(window).height() >= $('footer').offset().top) {
                        $('.b-col-info').css("bottom", $(window).scrollTop() + $(window).height() - $('footer').offset().top + "px");
                    } else {
                        $('.b-col-info').css("bottom", "0");
                    }

                }
                else {

                    $('.b-col-info').css("margin-left", 0);
                    $('.b-col-info').css("margin-top", "0px");
                    $('.b-col-info').css("position", "static");

                }
            } else {

                if ($(window).scrollTop() > $('.b-foto_room').height() - $(window).height()) {

                    $('.b-foto_room').css("position", "fixed");
                    $('.b-col-info').css("margin-left", ($(window).width() - 240) / 2);
                    $('.b-foto_room').width(($(window).width() - 240) / 2);
                    if ($(window).scrollTop() + $(window).height() >= $('footer').offset().top) {
                        $('.b-foto_room').css("bottom", $(window).scrollTop() + $(window).height() - $('footer').offset().top + "px");
                        $('.b-foto_room').css("top", "auto");
                    } else {
                        // $('.b-foto_room').css("top", $(window).scrollTop() + $(window).height() - $('footer').offset().top + "px");
                        $('.b-foto_room').css("top", 0);
                    }

                }
                else {

                    $('.b-col-info').css("margin-left", 0);
                    $('.b-foto_room').css("margin-left", 0);
                    $('.b-foto_room').css("margin-top", "0px");
                    $('.b-foto_room').css("position", "static");

                }
            }
        }
    });

    $(".b-visible-nav").click(function () {
        $(".b-header-nav").toggleClass("header-visible");
        $(".b-visible-nav").toggleClass("btn-visible-nav_active");
        $(".b-visible-nav").toggleClass("rotate-block");
    })

    if (document.documentElement.clientWidth > 1280) {

        // вычисление и задание высоты контейнера, в котором находится зафиксированный блок
        $('.stickem-container').height($(".info_transfer").height());

        function getTopOffset(e) {
            var y = 0;
            do {
                y += e.offsetTop;
            } while (e = e.offsetParent);
            return y;
        }

        var block = document.getElementById('fix_block');
        /* fix_block - значение атрибута id блока */
        if (null != block) {
            var topPos = getTopOffset(block) ;

            window.onscroll = function () {
                var scrollHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight),

                    // определяем высоту блока в котором находится fix_block
                    blockHeight = block.offsetHeight,

                    // вычисляем высоту контейнера с id = stop, места фиксации блока
                    footerHeight = document.getElementById('stop').offsetHeight,

                    // считаем позицию, до которой блок будет зафиксирован
                    stopPos = scrollHeight - blockHeight - footerHeight - 90 - 110;

                var newcss = (topPos < window.pageYOffset) ?
                    'top:0px; position: fixed;  padding-right: 15px' : 'position:relative;';

                if (window.pageYOffset > stopPos)
                    newcss = 'position:absolute; bottom: 360px;  padding-right: 15px';

                block.setAttribute('style', newcss);
            }
        }

    }


    $(".faq__caption").click(function () {
        $(this).children(".faq_arr").toggleClass('b_rotate');
        $(this).parent().parent().children(".faq-list").slideToggle('normal');
        $(this).parent().parent().children(".faq__hr").slideToggle('normal');
    });

    $(".control-comment-add").click(function () {
        $(".b-add-comment").slideToggle('normal');
    });

    $(".js-caption-comment").click(function(){
        if ($(".b-add-comment").css("display") == "block"){
            $(".b-add-comment").slideUp("normal");
        }
    });


    function Add_Height_News_Column() {
// 166px - высота блока с заголовком Акции и нововсти
        if ($(window).width() > 1280) {
            var value = ($(window).width() - 240) / 2;
            $(".b-column-news").width(value);
            $(".b-column-article").css("margin-left", value);
            $(".b-news-list ").height($(window).height() - 166);
        }else{
            $(".b-news-list ").height("auto");
        }
    }
    
    function replacePopupbyScroll() {
        if ($(window).width() > 1280) {
            $(".b-item-news-link").each(function () {
                $(this).addClass("b-scroll-to-id");
                $(this).removeClass("popup");
            });

            $(".b-article-item").each(function () {
                $(this).addClass("_mPS2id-t");
                $(this).addClass("mPS2id-target");
                $(this).addClass("mPS2id-target-last");
                $(this).addClass("mPS2id-target-first");
            });
        } else{
            $(".b-item-news-link").each(function () {
                $(this).removeClass("b-scroll-to-id");
                $(this).removeClass("_mPS2id-h");
                $(this).addClass("popup");
            });

            $(".b-article-item").each(function () {
                $(this).removeClass("_mPS2id-t");
                $(this).removeClass("mPS2id-target");
                $(this).removeClass("mPS2id-target-last");
                $(this).removeClass("mPS2id-target-first");
            });
        }
    }



    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(
            function()
            {
                currentHeight = $(this).height();
                if(currentHeight > tallestcolumn)
                {
                    tallestcolumn = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }


    function scroolly_CurrentBanquetHall() {

        if ($(window).width() > 1280) {
            var OffsetFooter = $("footer").height() + 35;
            $('#current-banqueting-hall-scrolly-content').scroolly([
                {
                    to: 'con-top',
                    css: {
                        top: '0',
                        bottom: '0',
                        position: 'absolute'
                    }
                },
                {
                    from: 'con-top',
                    to: 'con-bottom - 100el = vp-top',
                    css: {
                        top: '0',
                        bottom: '0',
                        position: 'fixed'

                    }
                },
                {
                    from: 'con-bottom - 100el = vp-top',
                    css: {
                        top: '',
                        bottom: OffsetFooter + 'px',
                        position: 'absolute'
                    }
                }
            ], $('.b-current-banqueting-hall-left-column'));
        }else{
            $('#current-banqueting-hall-scrolly-content').css("position", "relative");

        }

    }

    function scroolly_Complex() {

        if ($(window).width() > 1280) {
            $('.b-complex-form').width($(".complex-right-column").width());
            $('.b-complex-form').scroolly([
                {
                    to: 'con-top',
                    css: {
                        top: '0',
                        bottom: '',
                        left: '',
                        right: '50px',
                        position: 'absolute'
                    }
                },
                {
                    from: 'con-top',
                    to: 'con-bottom - 100el = vp-top',
                    css: {
                        top: '0',
                        bottom: '',
                        left: '',
                        right: '50px',
                        position: 'fixed'

                    }
                },
                {
                    from: 'con-bottom - 100el = vp-top',
                    css: {
                        top: '0',
                        bottom: '',
                        left: '',
                        right: '50px',
                        position: 'absolute'
                    }
                }
            ], $('.complex-right-column'));
        }else{
            $('.b-complex-form').css({"position":"relative", "width":"100%" , "right":"auto"});
        }

    }


    $("#addComment").submit(function () {
        $.ajax({
            type: "POST",
            url: "addComment.php",
            data: $(this).serialize()
        }).done(function (response) {
            var ContentBeforeHtml = $("#addComment").html();
            var ContentResponseHtml = '<div class="responseContent">' +
                '<div>Спасибо за Ваш отзыв!</div>' +
                '<div>Он будет добавлен в ближайшее время.</div>' +
                ' </div>';
            $("#addComment").trigger("reset");
            $("#addComment").html(ContentResponseHtml);
            setTimeout(function () {
                $("#addComment").html(ContentBeforeHtml);
            }, 3000);
        });
        return false;
    });

    $("#MessageAction").submit(function () {
        $.ajax({
            type: "POST",
            url: "addComment.php",
            data: $(this).serialize()
        }).done(function (response) {
            var ContentBeforeHtml = $("#MessageAction").html();
            var ContentResponseHtml = '<div class="popup-form_border"> ' +
                '<div class="form_border__circle"></div> ' +
                '<div class="b-popup-response-content"> ' +
                '<div>Спасибо за участие! Ваша заявка отправлена.</div> ' +
                '<div>Наш менеджер свяжется с вами в ближайшее время.</div> ' +
                '</div> ' +
                '</div>';
            $("#MessageAction").trigger("reset");
            $("#MessageAction").html(ContentResponseHtml);
            setTimeout(function () {
                $("#MessageAction").html(ContentBeforeHtml);
            }, 3000);
            setTimeout(function () {
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });

    $(".btn_link_action").click( function () {
        $('.b-popup-form-area textarea').text("");
        var NameAction = $(this).attr("data-name-action");
        var TextFromArea = "Здравствуйте, меня интересует " + NameAction;
        $('.b-popup-form-area textarea').append(TextFromArea);
    });



    $(".date").kendoDatePicker({
        value: new Date(),
        format: "dd MMMM yyyy"
    });
});
