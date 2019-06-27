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
  $('.reviews-slider').slick({
  	infinite: true,
  	slidesToShow: 2,
  	slidesToScroll: 1,
  	prevArrow: '<button class="slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">	<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
	nextArrow: '<button class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">	<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  $('.video-popup').magnificPopup({
  	disableOn: 700,
  	mainClass: 'mfp-fade',
  	removalDelay: 160,
  	preloader: true,

  	fixedContentPos: true,
  	type: 'iframe',
  	iframe: {
  		markup: '<div class="mfp-iframe-scaler">'+
  		'<div class="mfp-close"></div>'+
  		'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
  		'</div>',
  		patterns: {
  			youtube: {
  				index: 'youtube.com/', 
  				id: 'v=',
  				src: 'https://www.youtube.com/embed/%id%?autoplay=1'
  			},
  			vimeo: {
  				index: 'vimeo.com/',
  				id: '/',
  				src: '//player.vimeo.com/video/%id%?autoplay=1'
  			},
  			gmaps: {
  				index: '//maps.google.',
  				src: '%id%&output=embed'
  			}
  		},
  		srcAction: 'iframe_src', 
  	}
  });

	//удаление атрибута 'style'
	$(window).scroll(function(){
		if($(this).scrollTop() > 50){
			$('.header').attr('style')
		}else{
			$('.header').removeAttr('style');
		}
	});

});
  //ТАЙМЕР
    $(document).ready(function() {
        var eDate = jQuery('.eDate').text();
        var d = eDate;
        $(".eTimer").eTimer({
            etType: 1,
            etDate: d,
            etTitleText: "До конца акции осталось:",
            etTitleSize: 27,
            etShowSign: 1,
            etSep: ":",
            etFontFamily: "inherit",
            etTextColor: "#000",
            etPaddingTB: 3.5,
            etPaddingLR: 7,
            etBackground: "transparent",
            etBorderSize: 0,
            etBorderRadius: 0,
            etBorderColor: "white",
            etShadow: " 0px 0px 0px 0px #333333",
            etLastUnit: 4,
            etNumberFontFamily: "inherit",
            etNumberSize: 30,
            etNumberColor: "#e05247",
            etNumberPaddingTB: 0,
            etNumberPaddingLR: 0,
            etNumberBackground: "transparent",
            etNumberBorderSize: 0,
            etNumberBorderRadius: 0,
            etNumberBorderColor: "white",
            etNumberShadow: "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.5)"
        });

        jQuery(function() {
            var eNd = jQuery('.etDays');
            var eN1 = jQuery('.etDays .etNumber:nth-child(1)').text();
            var eN2 = jQuery('.etDays .etNumber:nth-child(2)').text();

            eNd.hide().next().hide();
            $('.etSign').hide();

            if (eN2 > 0 || eN1 > 0) {
                eNd.show().next().show();
            }

        });
    });

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #e05247 }";
  document.body.appendChild(css);
};

