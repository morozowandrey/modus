$(window).load(function(){
	var tog = false;
	$(".fa-search").click(function(){
		$(".header-menu").toggle(100);
		$('#search').toggle(100);
		$(".fa-search").fadeOut(100);
		tog = true;
		return false;
	})
	$("#search").click(function(){
		return false;
	})
	
	$('html').click(function(){
		if(tog==true){

		$(".header-menu").toggle(100);
		$('#search').toggle(100);
		$(".fa-search").fadeIn(100);
		tog=false;
		}
		else if(tog==false){
			return false;
		}
	})
})