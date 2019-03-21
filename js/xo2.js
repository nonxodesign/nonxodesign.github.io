
var toggleStatus = 1;
		function mobile_menu_iconbox() {
			if (toggleStatus == 1) {
				document.getElementById("mobie_menu").style.top = '18vh';
				document.getElementById("mobie_menu").style.opacity = "1";
				$(".grid_project").transition({ opacity:.01 }, 500, 'ease');
				toggleStatus = 0;

			} else if (toggleStatus == 0) {
				document.getElementById("mobie_menu").style.top = "100vh";
				document.getElementById("mobie_menu").style.opacity = "0";
				$(".grid_project").transition({ opacity:1 }, 1500, 'ease');
				toggleStatus = 1;
			}
		}


var toggleStatus = 1;
		function about__link() {
			if (toggleStatus == 1) {
				document.getElementById("about_show").style.top = '0vh';
				$(".grid_project").transition({ opacity:.01 }, 500, 'ease');
				toggleStatus = 0;

			} else if (toggleStatus == 0) {
				document.getElementById("about_show").style.top = "100vh";
				$(".grid_project").transition({ opacity:1 }, 1500, 'ease');
				toggleStatus = 1;
			}
		}



//back-To-Top
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 10) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});
});

$(document).ready(function(){
    $('.chocolat-parent').Chocolat();
});