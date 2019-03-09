
var toggleStatus = 1;
		function mobile_menu_iconbox() {
			if (toggleStatus == 1) {
				document.getElementById("mobie_menu").style.top = "0";
				document.getElementById("mobie_menu").style.opacity = "1";
				$(".menu_button1").transition({ opacity:1, y:0}, 2500 ,'ease');
				$(".grid_project").fadeOut("ease");
				toggleStatus = 0;

			} else if (toggleStatus == 0) {
				document.getElementById("mobie_menu").style.top = "100vh";
				document.getElementById("mobie_menu").style.opacity = "0";
				$(".grid_project").fadeIn("ease");
				$(".menu_button1").transition({ opacity:0 },500 ,'ease');
				toggleStatus = 1;
			}
		}