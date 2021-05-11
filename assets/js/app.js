$(function() {

    const header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop;

        checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
        });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }


    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        const $this = $(this),
            blockId = $(this).data('scroll');
            blockOfset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active")
        
            $("html, body").animate({
                scrollTop: blockOfset
            },500);
    });


    $("#nav_toggle, nav a").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
        $("#nav_toggle").toggleClass("active");
    });


    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        
        const $this = $(this),
            blockId = $(this).data('collapse');

        $this.toggleClass("active")
    });


    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });




});