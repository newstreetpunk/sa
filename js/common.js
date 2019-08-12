$(function() {

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

  //удаление атрибута 'style'
  $(window).scroll(function(){
    if($(this).scrollTop() > 50){
      $('.header').attr('style')
    }else{
      $('.header').removeAttr('style');
    }
  });

}
$(document).ready(function() {
  $('.stocks-item--img').equalHeights();
  $('.steps-item').equalHeights();
});

  //СЧЕТЧИК
  $('.our-numbers-block').each(function() {
    $('.number-cell').each(function() {

      var target_block = $(this);
      var thN = target_block.text();
      var blockStatus = true;

        $(window).scroll(function() {

        var scrollEvent = ($(window).scrollTop() > (target_block.offset().top - $(window).height()));

        if(scrollEvent && blockStatus) {
        blockStatus = false;
        $({numberValue: 0}).animate({numberValue:thN}, {
          duration: 800,
          easing: "linear", 
          step: function(val) {
            target_block.html('>' + Math.ceil(val));  
          } 
        });  
      }  
    });
    });
  });
 


  setTimeout("$('.main-content-block .sa-btn').css('left', '0');", 100);

  $('.menu-btn').click(function(){
   $('.custom-logo-link').toggleClass('active');
   $(this).toggleClass('active');
   $('.sa-menu--mobile').slideToggle(100);
 });

  $('.sa-menu--mobile nav>ul>li a:contains("Услуги")').parent().append('<button></button>');
  $('.sa-menu--mobile nav>ul>li button').on('click', function() {
    $(this).toggleClass('active');
    $('.sa-menu--mobile nav>ul>li>ul').slideToggle(100);
  });

  $('.reviews-slider').slick({
   infinite: true,
   slidesToShow: 2,
   slidesToScroll: 1,
   prevArrow: '<button class="slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 477.175 477.175" xml:space="preserve">	<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
   nextArrow: '<button class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 477.175 477.175" xml:space="preserve">	<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
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

  $('.certificates-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    //centerMode: true,
    //centerPadding: '100px',
    prevArrow: '<button class="slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 477.175 477.175" xml:space="preserve">  <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
    nextArrow: '<button class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 477.175 477.175" xml:space="preserve">  <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
    responsive: [
   {
    breakpoint: 581,
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

$('.steps-item').append('<span>');
$('.steps-item').each(function(i) {
  $(this).children('span').text(+ i + + 1);
});


//   function wimWid() {
//     var winWidth = ($(window).width()),
//     conWidth = ($('.container').width()),
//     padLeft = (winWidth - conWidth) / 2

//     $('.tabs__caption li').css('padding-left', padLeft);
//     $('.tabs__content').css('padding-right', padLeft);
//   }wimWid();

//   $(window).on('resize', function(){wimWid();});

//   $('.tabs .tabs__content:nth-child(2)').addClass('active');
//   $('ul.tabs__caption li:first-child').addClass('active');

//   $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
//     $(this).addClass('active').siblings().removeClass('active')
//     .closest('div.tabs').find('div.tabs__content').fadeOut(0).eq($(this).index()).fadeIn(500);
//   });
// }else{
//   $('.tabs .tabs__content:nth-child(2)').addClass('active');
//   $('ul.tabs__caption li:first-child').addClass('active');

//   $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
//     $(this).addClass('active').siblings().removeClass('active')
//     .closest('div.tabs').find('div.tabs__content').slideUp(0).eq($(this).index()).slideDown(500);
//   });

$('.tabs__caption-item:first-child span, .tabs__caption-item:first-child p').addClass('active');

if($(window).width() > 580){
  function wimWid() {
   var winWidth = ($(window).width()),
   conWidth = ($('.container').width()),
   padLeft = (winWidth - conWidth) / 2,
   widItem = ($('.tabs__caption-item span').width());

   $('.tabs__caption-item span').css('padding-left', padLeft);
   $('.tabs__caption-item p').css({
    'padding-right': padLeft
    //'left': widItem + 200
  });
 }wimWid();

 $(window).on('resize', function(){wimWid();});

 $('.tabs__caption-item span').on('click', function(){
    $('.tabs__caption-item span').removeClass('active');
    $('.tabs__caption-item p').fadeOut(0);
    $(this).addClass('active').next().fadeIn(500);
 });
}else{
  $('.tabs__caption-item span').on('click', function(){
    $('.tabs__caption-item span').removeClass('active');
    $('.tabs__caption-item p').slideUp(300);
    $(this).addClass('active').next().slideDown(300);
 });
}


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
