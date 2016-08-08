$(window).load(function(){	
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

		$('ul.header-menu').toggle();
	})

})

