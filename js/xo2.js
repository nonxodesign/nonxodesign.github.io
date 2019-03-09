
var toggleStatus = 1;
		function mobile_menu_iconbox() {
			if (toggleStatus == 1) {
				document.getElementById("mobie_menu").style.top = "0";
				document.getElementById("mobie_menu").style.opacity = "1";
				$(".grid_project").fadeOut("ease");
				toggleStatus = 0;
			} else if (toggleStatus == 0) {
				document.getElementById("mobie_menu").style.top = "100vh";
				document.getElementById("mobie_menu").style.opacity = "0";
				$(".grid_project").fadeIn("ease");
				toggleStatus = 1;
			}
		}