

(function( $ ){


	/* ----------------------------------------------------------- */
	/*  2. FIXED MENU
	/* ----------------------------------------------------------- */


	jQuery(window).bind('scroll', function () {

    if ($(window).scrollTop() > 100) {

        $('#mu-header').addClass('mu-fixed-nav');
        
	    } else {
	        $('#mu-header').removeClass('mu-fixed-nav');
	    }
	});

		
	/* ----------------------------------------------------------- */
	/*  2. FEATURED SLIDE (TYPED SLIDER)
	/* ----------------------------------------------------------- */

		var typed = new Typed('#typed', {
		    stringsElement: '#typed-strings',
		    typeSpeed: 20,
		    backSpeed: 20,
		    startDelay: 1000,
		    loop: true,
		    loopCount: Infinity
		});

		
	/* ----------------------------------------------------------- */
	/*  3. SKILL PROGRESS BAR
	/* ----------------------------------------------------------- */

		$('.mu-skill-progress-bar').appear(function() {

		 	$('.mu-html5-bar').LineProgressbar({
				percentage: 90,
				triggerOnce: true
			});

			$('.mu-css-bar').LineProgressbar({
				percentage: 80,
				triggerOnce: true
			});

			$('.mu-photoshop-bar').LineProgressbar({
				percentage: 80,
				triggerOnce: true
			});

			$('.mu-wordpress-bar').LineProgressbar({
				percentage: 75,
				triggerOnce: true
			});


		});



	/* ----------------------------------------------------------- */
	/*  4. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 

		//MENU SCROLLING WITH ACTIVE ITEM SELECTED

		// Cache selectors
		var lastId,
		topMenu = $(".mu-menu"),
		topMenuHeight = topMenu.outerHeight()+13,
		// All list items
		menuItems = topMenu.find('a[href^=\\#]'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+22;
		  jQuery('html, body').stop().animate({ 
		      scrollTop: offsetTop
		  }, 1500);
		  e.preventDefault();
		});

		// Bind to scroll
		jQuery(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href=\\#"+id+"]").parent().addClass("active");
		   }           
		});


	/* ----------------------------------------------------------- */
	/*  5. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */ 

		jQuery('.mu-menu').on('click', 'li a', function() {
		  $('.in').collapse('hide');
		});


	/* ----------------------------------------------------------- */
	/*  6. PORTFOLIO GALLERY
	/* ----------------------------------------------------------- */ 
		$('.filtr-container').filterizr();

		//Simple filter controls

	    $('.mu-simplefilter li').click(function() {
	        $('.mu-simplefilter li').removeClass('active');
	        $(this).addClass('active');
	    });

	/* ----------------------------------------------------------- */
	/*  7. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
	/* ----------------------------------------------------------- */ 

	$('.mu-filter-imglink').magnificPopup({
	  type: 'image',
	  mainClass: 'mfp-fade',
	  gallery:{
	    enabled:true
	  }
	});

	/* ----------------------------------------------------------- */
	/*  9. BUTTON SMOOTH SCROLL ( VIEW MY WORK )
	/* ----------------------------------------------------------- */

		$('.view-my-work-btn').on('click',function (e) {
		    e.preventDefault();
		    var target = this.hash,
		    $target = $(target);
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 1000, 'swing', function () {
		        window.location.hash = target;
			});
		});



	
})( jQuery );

var html, body, scrollToTopButton;
window.onload = function() {
  html = document.documentElement;
  body = document.body;
  scrollToTopButton = document.getElementById("scrollToTopButton");
};

function scrollToTop(totalTime, easingPower) {
  //console.log("here");
  var timeInterval = 1; //in ms
  var scrollTop = Math.round(body.scrollTop || html.scrollTop);
  //var by=- scrollTop;
  var timeLeft = totalTime;
  var scrollByPixel = setInterval(function() {
    var percentSpent = (totalTime - timeLeft) / totalTime;
    if (timeLeft >= 0) {
      var newScrollTop = scrollTop * (1 - easeInOut(percentSpent, easingPower));
      body.scrollTop = newScrollTop;
      html.scrollTop = newScrollTop;
      //console.log(easeInOut(percentSpent,easingPower));
      timeLeft--;
    } else {
      clearInterval(scrollByPixel);
      //Add hash to the url after scrolling
      //window.location.hash = hash;
    }
  }, timeInterval);
}

function easeInOut(t, power) {
  if (t < 0.5) {
    return 0.5 * Math.pow(2 * t, power);
  } else {
    return 0.5 * (2 - Math.pow(2 * (1 - t), power));
  }
}

window.onscroll = controlScrollToTopButton;

function controlScrollToTopButton() {
  var windowInnerHeight = 2 * window.innerHeight;
  if (
    body.scrollTop > windowInnerHeight ||
    html.scrollTop > windowInnerHeight
  ) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
}
    $(window).on("load",function(){
         $(".loader-wrapper").fadeOut("slow");
    });

    $(".view-my-work-btn").pulsate({
  color: $(this).css("background-color"), // set the color of the pulse
  reach: 20,                              // how far the pulse goes in px
  speed: 1000,                            // how long one pulse takes in ms
  pause: 0,                               // how long the pause between pulses is in ms
  glow: true,                             // if the glow should be shown too
  repeat: true,                           // will repeat forever if true, if given a number will repeat for that many times
  onHover: false                          // if true only pulsate if user hovers over the element
});