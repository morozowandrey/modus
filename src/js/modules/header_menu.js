$(window).load(function(){	
	var toggle = false;

	$(".drop").click(function(){
		$(".header-submenu").toggleClass("tog-box");
		return false;
	})
	
	$("html").click(function(){
		if($(".header-submenu").hasClass('tog-box')){
			$(".header-submenu").removeClass('tog-box');
		}
	})

	$('span.menu-btn').click(function() {
		if (toggle === false) {
			$('ul.header-menu').show();
			toggle = true;
		}
		else if (toggle === true) {
			$('ul.header-menu').hide();
			toggle = false;
		}
	})

	$(window).resize (function() {
		var width = window.innerWidth;

			if (width >= 830) {
				if (toggle === false) {

					$(".header-menu").show();
					toggle = true;
				}
			}

			else if (width <= 830) {
				if (toggle === true) {

					$(".header-menu").hide();
					toggle = false;
				}
			}

	});
});
