$(function() {

  setTimeout("$('.main-content-block .sa-btn').css('left', '0');", 100);

  $('.menu-btn').click(function(){
	$(this).toggleClass('active');
  });

  if ($(window).width() > 768) {

	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("header").setAttribute(
				"style", "top: 0; background-color: #fff; box-shadow: 0 3px 40px rgba(0,0,0,.3);");
		} else {
			document.getElementById("header").setAttribute(
				"style", "top: -95px; background-color: #fff; box-shadow: 0 3px 40px transparent;");
		}
		prevScrollpos = currentScrollPos;
	}

  }

	//удаление атрибута 'style'
	$(window).scroll(function(){
		if($(this).scrollTop() > 50){
			$('.header').attr('style')
		}else{
			$('.header').removeAttr('style');
		}
	});

});

