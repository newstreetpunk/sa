$(function() {

	setTimeout("$('.main-bg-1').show();", 1350);
  setTimeout("$('.main-content-block').css('left', '0');", 1350);
	setTimeout("$('.main-bg-2').addClass('vis');", 1300);
	setTimeout("$('.main-bg-3').addClass('vis');", 1400);

	/*$('.main').parallax({
    'elements': [
    {
      'selector': 'section.main',
      'properties': {
        'x': {
          'background-position-x': {
            'initial': 0,
            'multiplier': 0.1
          }
        }
      }
    },
    {
      'selector': 'div.main-bg-3',
      'properties': {
        'x': {
          'background-position-x': {
            'initial': 50,
            'multiplier': 0.05,
            'unit': '%'
          }
        }
      }
    },
    {
      'selector': 'div.main-bg-2',
      'properties': {
        'x': {
          'background-position-x': {
            'initial': 50,
            'multiplier': 0.05
          }
        }
      }
    }
    ]
});*/



	//удаление атрибута 'style'
	$(window).scroll(function(){
		if($(this).scrollTop() > 50){
			$('.header').attr('style')
		}else{
			$('.header').removeAttr('style');
		}
	});

});

