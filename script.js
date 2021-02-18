$(function() {

$(window).on("scroll touchmove", function() {

    $("nav").toggleClass("tiny", $(document).scrollTop() > 0);
    $(".navpanel").toggleClass("tiny", $(document).scrollTop() > 0);
  });


$(window).scroll(function() {

    if ( $(document).scrollTop() > 50 ) {
        $("nav").addClass("transparent");
    } else {
        $("nav").removeClass("transparent");
    }

    if ( $(document).scrollTop() > 50 ) {
        $(".navpanel-link").addClass("deep-blue");
    } else {
        $(".navpanel-link").removeClass("deep-blue");
    }

    if ( $(document).scrollTop() == 0 ) {
        $(".logo").addClass("azur");
    } else {
        $(".logo").removeClass("azur");
    }
  });

  
function scrollToSection(event) {
    event.preventDefault();
    
    var $section = $( $(this).attr("href") );
    $("html, body").animate({
        scrollTop: $section.offset().top
    }, 300);
}

$("[data-scroll=linky]").on("click", scrollToSection);


$("[data-scroll=linky]").on("mouseenter", function() {

    $(this).toggleClass("animate__headShake");
           
});

$("[data-scroll=linky]").on("mouseleave", function() {

    $(this).toggleClass("animate__headShake");
           
});

$("[data-scroll=ikony]").on("mouseenter", function() {
    $(this).toggleClass("animate__pulse");
});


$("[data-scroll=ikony]").on("mouseleave", function() {
    $(this).toggleClass("animate__pulse");
});



var $animation_elements = $("[data-scroll=scroll-el-1]");
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);


        if ( (element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position) ) {
            $element.addClass("in-view");
        } else {
            $element.removeClass("in-view");
        }
    });
}


$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");

/*$("[data-scroll=aside]").on("scroll", function(evt) {
    
    $(this).toggleClass("animate__bounceInRight");
});*/

var $animation_kontakt = $("[data-scroll=kontakt]");
var $window = $(window);

function scrollKontakt() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_kontakt, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        
        if ( ( element_bottom_position >= window_top_position ) && ( element_top_position <= window_bottom_position ) ) {
            $element.addClass("kontakt-scroll");
        } else {
            $element.removeClass("kontakt-scroll");
        }
    });
}

$window.on("scroll resize", scrollKontakt);
$window.trigger("scroll");


/*$('.hamburger').on('click', function() {
   $('.navpanel').slideToggle();

});*/

$('.hamburger').on('click', function() {
    $('.navpanel').toggleClass('show');
});

/*let barWidth = (window.innerWidth - document.body.clientWidth) + " px";

console.log(barWidth);*/



});
