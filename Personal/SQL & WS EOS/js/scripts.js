$(function () {
    $('#rtg-container').hide().fadeIn(1000);
    var ctaLink = 'https://www.microsoft.com/en-us/server-cloud/products/sql-server/';
    var ctaTarget = '_blank';
        if (partnerEmailAddress) {
            ctaLink = 'mailto:' + partnerEmailAddress;
            ctaTarget = '_self';
        } 
        $('#cta-link').attr('href', ctaLink).attr('target',ctaTarget);
    //sliderSetup();

    $('#cta-link').click(function(e) {
        e.stopPropagation();
        
    });

    $('#email-cta').click(function(e) {
        e.stopPropagation();
       if (ctaTarget == '_blank') {
            window.open(ctaLink);
        } else {
            location.href = ctaLink ;
        }
    });
});

$(window).scroll(function () {
    var scrollVar = $(window).scrollTop();
    var divTop = $('#sticky-anchor').offset().top;
   
    if (scrollVar > divTop) {
        $('#rtg-cta').addClass('rtg-sticky');
        $('#sticky-anchor').addClass('placeholder');
    } else {
        $('#rtg-cta').removeClass('rtg-sticky');
        $('#sticky-anchor').removeClass('placeholder');
    }

    $('.fadein').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var top_of_object = $(this).offset().top;
        var bottom_of_window = scrollVar + $(window).height();

        /*If the object is completely visible in the window, fade it in */
        if (bottom_of_window >= top_of_object) {
            $(this).fadeOut(2000);
        } 
        /* else {
        $(this).animate({ 'opacity': '0' }, 1000);
        }*/
        //$(this).css( 'opacity': (bottom_of_window - $(this).offset().top) / 100);
    });
    $('.wipein').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var top_of_object = $(this).offset().top;
        var bottom_of_window = scrollVar + $(window).height();

        if (bottom_of_window >= top_of_object) {
            $(this).animate({ 'width': 0 }, 1000);
        }
    });
});