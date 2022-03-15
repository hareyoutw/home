//aos
AOS.init();


//Go To Top btn & smooth scroll - refer https://codepen.io/desirecode/pen/MJPJqV
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#top').fadeIn(); 
        } else { 
            $('#top').fadeOut(); 
        } 
    }); 
    $('#top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});



$(document).ready(function() {
 
  $("#owl-demo, #owl-demo2").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

  });
 
});





//niceScroll right
  $("html").niceScroll({
       autohidemode: false,
  cursorcolor:"#e6b964", 
  cursorwidth: "8", 
  cursorborder: "",
       cursoropacitymax:0.7,
      //cursorborderradius: "0px"
});




// nav & smooth scroll - https://byprimer.co/blog/navigation-smooth-scrolling-jquery/
$(document).ready(function() {
	
  var headerHeight = $('nav').outerHeight(); // Target your header navigation here
	
  $('#nav_smooth li a').click(function(e) {
  	
  	var targetHref   = $(this).attr('href');
	  
	$('html, body').animate({
		scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
	}, 1000);
    
    e.preventDefault();
  });
});





// down smooth

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#smooth").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

