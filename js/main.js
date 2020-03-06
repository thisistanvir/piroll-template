
(function ($) {
	"use strict";

   $(document).ready(function($){

// Mobile Menu
   $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: '991',

   });

   // Sticky Menu
   $('.js--about-section').waypoint(function(direction){
      if(direction == 'down'){
            $('.header-area').addClass('sticky');
         } else {
            $('.header-area').removeClass('sticky');
      }
   });
   // Sticky Menu
   $('.main-menu li').on('click', function(){
      $('.main-menu li').removeClass('active');
      $(this).addClass('active');
   });

    // Smooth Scroll for IE/ EDGE/ SAFARI
    $('a').on('click', function(event){
      if (this.hash !==''){
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
               scrollTop: $(hash).offset().top
               }, 800, function(){
               window.location.hash = hash;
            });
      }
   });


      // Start Owl-carousel
      $('.slider-area').owlCarousel({
         items: 1,
         loop: true,
         dots: true,
         thumbs: false,
         nav: true,
         navText:['<i class="pe-7s-angle-left"></i>','<i class="pe-7s-angle-right"></i>'],
         autoplay: true,
				 autoplayTimeout:3000,
    		 autoplayHoverPause:true,
      });

      $('.testimonial-carousel').owlCarousel({
         items: 1,
         loop: true,
         dots: true,
         thumbs: false,
         nav: false,
         autoplay: true,
				 autoplayTimeout:3000,
    		 autoplayHoverPause:true,
      });

      $('.brand-carousel').owlCarousel({
         loop: true,
         dots: false,
         nav: false,
         center: true,
         autoplay: false,
				 autoplayTimeout:1000,
    		 autoplayHoverPause:true,
         responsive: {
            0:{
                items:1
            },
            768:{
                items: 3
            },
            992:{
                items: 5
            },
        },
      });
      // End Owl-carousel //


      // Bar Filler
      $('#bar1').barfiller({
         barColor: "#10c9c3"
      });
      $('#bar2').barfiller({
         barColor: "#10c9c3"
      });
      $('#bar3').barfiller({
         barColor: "#10c9c3"
      });
      // End Bar filler

      // Start Counter Up
      $('.counter').counterUp({
         delay: 30,
         time: 2000
     });
      // End Counter Up
      
      // Magnific Popup
      $('.img-popup').magnificPopup({
         type: 'image',
         gallery:{
            enabled:true
          }
       });
      $('.video-popup').magnificPopup({
         type: 'iframe'
       });

   });

})(jQuery);
