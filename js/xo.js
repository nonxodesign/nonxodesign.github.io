





$(document).ready(function(){
	    		$(".about__link").click(function(){
	        		$("#about_show").fadeIn("slow");
	        		$('.about__link').transition({ y: '-45vh' },800 ,'ease');
	        		$('.project__link').transition({ opacity:0 },400 ,'ease');
	        		$('.S_0').transition({ y: '-6vh' },700 ,'ease');
					$('.S_3').transition({ y: '-6vh' },1000 ,'ease');
	        		$('.P_1').transition({ y: '-2vh',opacity:1 },1000 ,'ease');
	        		$('#about_cross').transition({ opacity:1, y: '-45vh'},800 ,'ease');
   				});
			});

			$(document).ready(function(){
	    		$("#about_cross").click(function(){
	    			$('#about_cross').transition({ opacity:0, y: '1vh'},800 ,'ease')
	        		$("#about_show").fadeOut();
	        		$('.about__link').transition({ y: 0 },800 ,'ease');
	        		$('.project__link').transition({ opacity:1 },400 ,'ease');
	        		$('.P_1').transition({ opacity:0,  y: '1vh' },300 ,'ease');
	        		$('.S_0').transition({ y: '6vh' },700 ,'ease');
	        		$('.S_3').transition({ y: '6vh' },1100 ,'ease');
   				});
			});

			jQuery(document).on('keyup',function(evt) {
		    if (evt.keyCode == 27) {
		       $('#about_cross').transition({ opacity:0, y: '1vh'},800 ,'ease')
	        		$("#about_show").fadeOut();
	        		$('.about__link').transition({ y: 0 },800 ,'ease');
	        		$('.project__link').transition({ opacity:1 },400 ,'ease');
	        		$('.P_1').transition({ opacity:0,  y: '1vh' },300 ,'ease');
	        		$('.S_0').transition({ y: '6vh' },700 ,'ease');
	        		$('.S_3').transition({ y: '6vh' },1100 ,'ease');
		    }
		});

