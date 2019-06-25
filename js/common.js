$(function() {

  setTimeout("$('.main-content-block .sa-btn').css('left', '0');", 2000);

	//удаление атрибута 'style'
	$(window).scroll(function(){
		if($(this).scrollTop() > 50){
			$('.header').attr('style')
		}else{
			$('.header').removeAttr('style');
		}
	});

});

