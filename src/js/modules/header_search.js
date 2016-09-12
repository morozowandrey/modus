$(window).load(function(){
	var tog = false;

	$(".fa-search").click(function(){
		$('#search').show(100);
		tog = true;
		return false;
	})

	$("#search").click(function(){
		return false;
	})
	
	$('html').click(function(){
		if(tog==true){

			$('#search').hide(100);
			tog=false;
		}
	})
})