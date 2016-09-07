	$(window).load(function(){

        $('.slider-box').slick({
          slidesToShow: 6,
          slidesToScroll: 1
        });
	if(window.matchMedia('(max-width: 768px)').matches)
	{
	    $('.slider-box').slick({
	              slidesToShow: 4,
	              slidesToScroll: 1
	            });
	}
    })


