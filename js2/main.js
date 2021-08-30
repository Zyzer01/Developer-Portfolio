(function($) {

    "use strict";
  
  
  
  
   /* Back to Top
    * ------------------------------------------------------ */
   var ssBackToTop = function() {
  
    var pxShow  = 500,   // height on which the button will show
    fadeInTime  = 400,   // how slow/fast you want the button to show
    fadeOutTime = 400,   // how slow/fast you want the button to hide
    scrollSpeed = 300,   // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
    goTopButton = $(".go-top")
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= pxShow) {
            goTopButton.fadeIn(fadeInTime);
        } else {
            goTopButton.fadeOut(fadeOutTime);
        }
    });
    };
  
  
  
    /* Masonry
     * ---------------------------------------------------- */ 
    var ssMasonryFolio = function () {
  
        var containerBricks = $('.masonry');
  
        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
                resize: true
            });
        });
    };
  
  
   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {
  
        ssMasonryFolio();
        ssBackToTop();
  
    })();
  
  
  })(jQuery);
