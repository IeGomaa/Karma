$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $(".slider").innerHeight($(window).height() - 1);


    let z = $(".sc");

    $(window).scroll(function() {

        let sw = $(window).scrollTop();

        if (sw > 50) {
            $("header").css({
                "width":"100%",
            })
            $(".head").css({
                "position":"fixed",
                "marginTop":0,
                "padding-top": 0
            })
            
        } else {
            $("header").css({
                "width":"80%",
            })
            $(".head").css({
                "position":"absolute",
                "marginTop":50,
            })
        }

        if ($(window).scrollTop() > 600) {
            z.show(100);
        }else {
            z.hide(100);
        }

    })

    if ($(".prand .container").show()) {
        $(".count").countTo({
            from: 0,
            to: 9703,
            speed: 1500,
            refreshInterval: 60
        });
    
        $(".count2").countTo({
            from: 0,
            to: 11496,
            speed: 1500,
            refreshInterval: 60
        });
    
        $(".count3").countTo({
            from: 0,
            to: 3284,
            speed: 1500,
            refreshInterval: 60
        });
    
        $(".count4").countTo({
            from: 0,
            to: 10408,
            speed: 1500,
            refreshInterval: 60
        });
    }


    z.click(function() {
        $('html, body').animate({
            scrollTop: 0 
          },700)
    })

    $(".k1").click(function() {
        $('html, body').animate({
            scrollTop: 700
          },700)
    })

    $(".k2").click(function() {
        $('html, body').animate({
            scrollTop: 3600
          },700)
    })

    $(".k3").click(function() {
        $('html, body').animate({
            scrollTop: 1550
          },700)
    })

    $(".k4").click(function() {
        $('html, body').animate({
            scrollTop: 4200
          },700)
    })

    $(".k5").click(function() {
        $('html, body').animate({
            scrollTop: 5500
          },700)
    })

});