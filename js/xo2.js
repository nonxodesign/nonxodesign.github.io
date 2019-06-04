
var toggleStatus = 1;
		function mobile_menu_iconbox() {
			if (toggleStatus == 1) {
				document.getElementById("mobile_menu").style.top = '18vh';
				document.getElementById("mobile_menu").style.opacity = "1";
				$(".grid_project").transition({ opacity:.01 }, 500, 'ease-out');
				toggleStatus = 0;

			} else if (toggleStatus == 0) {
				document.getElementById("mobile_menu").style.top = "100vh";
				document.getElementById("mobile_menu").style.opacity = "0";
				$(".grid_project").transition({ opacity:1 }, 1500, 'ease-out');
				toggleStatus = 1;
			}
		}


var toggleStatus = 1;
		function about__link() {
			if (toggleStatus == 1) {
				document.getElementById("about_show").style.top = '0vh';
				document.getElementById("about_show").style.opacity = '1';
				$(".grid_project").transition({ opacity:.01 }, 500, 'ease');
				$(".about__link").transition({ y:'-45.5vh' }, 1500, 'ease');
				$('.about_cross').transition({ opacity:.5 },800 ,'ease');
				toggleStatus = 0;


			} else if (toggleStatus == 0) {

				document.getElementById("about_show").style.top = "100vh";
				document.getElementById("about_show").style.opacity = "0";
				$(".grid_project").transition({ opacity:1 }, 1500, 'ease');
				$(".about__link").transition({ y:'0' }, 1000, 'ease');
				$('.about_cross').transition({ opacity:0 },800 ,'ease');
				toggleStatus = 1;
			

		}}





//back-To-Top
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(500);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(500);   // Else fade out the arrow
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});
});

       
                    $(function(){
                $('.container_project').Chocolat({
                    imageSize: 'default',
                    // loop: true,
                    overlayOpacity : 0.9,
                    duration: 500,
                    fullScreen:false,
                    lastImage:0
                });

            });