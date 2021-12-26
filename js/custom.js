
(function($){
  "use strict";
  var NAY = {};
  var plugin_track = '/';
  $.fn.exists = function () {
        return this.length > 0;
    };

  /* ---------------------------------------------- /*
   * Pre load
  /* ---------------------------------------------- */
  NAY.PreLoad = function() {
    document.getElementById("loading").style.display = "none"; 
  }

    /*--------------------
        * Menu Close
    ----------------------*/
    NAY.MenuClose = function(){
      $('.navbar-nav a').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


  NAY.MenuTogglerClose = function(){
    $(".toggler-menu").on('click', function(){
      $(this).toggleClass('open');
      $('.header-left').stop().toggleClass('menu-open menu-open-desk');
    });
    $('.header-left a').on('click', function() {
     var toggle = $('.toggler-menu').is(':visible');
     if (toggle) {
       $('.header-left').removeClass('menu-open');
       $('.toggler-menu').removeClass('open');
     }
    });
  }

  /* ---------------------------------------------- /*
   * Header Fixed
  /* ---------------------------------------------- */
  NAY.HeaderFixd = function() {
    var HscrollTop  = $(window).scrollTop();  
      if (HscrollTop >= 100) {
         $('body').addClass('fixed-header');
      }
      else {
         $('body').removeClass('fixed-header');
      }
  }

  /*--------------------
        * One Page
    ----------------------*/
    NAY.OnePage = function(){
        $('.header-nav a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 60,
                      }, 1000);
                      return false;
                  }
            }
        });
    }


    /*--------------------
    * OwlSlider
    ----------------------*/
    NAY.Owl = function () {
      var owlslider = $("div.owl-carousel");
      if(owlslider.length > 0) {  
           owlslider.each(function () {
            var $this = $(this),
                $items = ($this.data('items')) ? $this.data('items') : 1,
                $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                $CenterSlider = ($this.data('center')) ? $this.data('center') : false,
                $space = ($this.attr('data-space')) ? $this.data('space') : 30;    
           
                $(this).owlCarousel({
                    loop: $loop,
                    items: $items,
                    responsive: {
                      0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                      480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                      768:{items: $this.data('sm-items') ? $this.data('sm-items') : 1},
                      980:{items: $this.data('md-items') ? $this.data('md-items') : 1},
                      1200:{items: $items}
                    },
                    dots: $navdots,
                    autoplayTimeout:$autospeed,
                    smartSpeed: $smartspeed,
                    autoHeight:$autohgt,
                    center:$CenterSlider,
                    margin:$space,
                    nav: $navarrow,
                    navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
                    autoplay: $autoplay,
                    autoplayHoverPause: true   
                }); 
           }); 
      }
    }

  /* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
    NAY.Gallery = function() {
      if ($(".lightbox-gallery").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()){
          if($(".lightbox-gallery").exists()){
            $('.lightbox-gallery').magnificPopup({
                delegate: '.gallery-link',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-fade',
                fixedContentPos: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after NAY current image
                }
            }); 
          }
          if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
                $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                      disableOn: 700,
                      type: 'iframe',
                      mainClass: 'mfp-fade',
                      removalDelay: 160,
                      preloader: false,
                      fixedContentPos: false
                });
            }
        // });
      }
    }

     /*--------------------
    * Masonry
    ----------------------*/
    NAY.masonry = function () {
      var portfolioWork = $('.portfolio-content');
      if ($(".portfolio-content").exists()){        
          if ($(".portfolio-content").exists()){
              $(portfolioWork).isotope({
                resizable: false,
                itemSelector: '.grid-item',
                layoutMode: 'masonry',
                filter: '*'
              });
              //Filtering items on portfolio.html
              var portfolioFilter = $('.filter li');
              // filter items on button click
              $(portfolioFilter).on( 'click', function() {
                var filterValue = $(this).attr('data-filter');
                portfolioWork.isotope({ filter: filterValue });
              });
              //Add/remove class on filter list
              $(portfolioFilter).on( 'click', function() {
                $(this).addClass('active').siblings().removeClass('active');
              });
          }
      }
  }

  /*--------------------
        * Progress Bar 
    ----------------------*/
    NAY.ProgressBar = function(){
        $(".skill-bar .skill-bar-in").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /*--------------------
        * particles
    ----------------------*/
    NAY.particles = function() {
      if ($("#particles-box").exists()){
      }
    }


    /*--------------------
        * Type It
    ----------------------*/
    NAY.mTypeIt = function() {
      if ($("#type-it").exists()){
                new TypeIt('#type-it', {
                speed: 300,
                loop:true,
                strings: [
                  'Developer',
                  'Designer'
                ],
                breakLines: false
            }); 
        }
    }

  // Window on Load
  $(window).on("load", function(){
    NAY.masonry(),
    NAY.PreLoad();
  });
  // Document on Ready
  $(document).ready(function() {
    NAY.particles(),
    NAY.HeaderFixd(),
    NAY.OnePage(),
    NAY.MenuClose(),
    NAY.MenuTogglerClose(),
    NAY.Gallery(),
    NAY.ProgressBar(),
    NAY.mTypeIt(),
    NAY.Owl(),
    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
  });

  // Document on Scrool
  $(window).on("scroll", function(){
    NAY.ProgressBar(),
    NAY.HeaderFixd();
  });

  // Window on Resize
  $(window).on("resize", function(){
  });

  $(function() {
    $('.scroll-bottom.go-to a').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  // Header menu animation
  if($('nav.header-nav').length){

    var nav = $('nav.header-nav .navbar-nav');
    var line = $('<div />').addClass('line');

    line.appendTo(nav);

    var active = nav.find('li.active a.active');
    var pos = 0;
    var wid = 0;

    if(active.length) {
      pos = active.position().left;
      wid = active.width();
      line.css({
        left: pos,
        width: wid
      });
    }

    nav.find('li a').click(function(e) {
      e.preventDefault();
      if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
        
        nav.addClass('animate');

        var _this = $(this);

        nav.find('li').removeClass('active');

        var position = _this.parent().position();
        var width = _this.parent().width();

        if(position.left >= pos) {
          line.animate({
            width: ((position.left - pos) + width)
          }, 300, function() {
            line.animate({
              width: width,
              left: position.left
            }, 150, function() {
              nav.removeClass('animate');
            });
            _this.parent().addClass('active');
          });
        } else {
          line.animate({
            left: position.left,
            width: ((pos - position.left) + wid)
          }, 300, function() {
            line.animate({
              width: width
            }, 150, function() {
              nav.removeClass('animate');
            });
            _this.parent().addClass('active');
          });
        }

        pos = position.left;
        wid = width;
      }
    });

  }

})(jQuery);