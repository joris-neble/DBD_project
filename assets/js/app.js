jQuery(function($){

	$('.quest-title').click(function(e){
		e.preventDefault();
		$(this).next().toggle('hide');
	});

});