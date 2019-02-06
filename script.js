$('.bxslider').bxSlider({
  auto: true,
  autoControls: false,
  stopAutoOnClick: true,
  pager: true,
  autoControls: false,
  speed:1500,
  adaptiveHeight:true,
});

$(window).scroll(function() {
  if ($(this).scrollTop()>=700) {
    // длительность анимации - 'slow'
    // тип анимации -  'linear'
    $('.mainMenu').fadeIn('slow','linear');
  }
  else {
    // длительность анимации - 'fast'
    // тип анимации -  'swing'
    $('.mainMenu').fadeOut('slow','swing');
  }
});
$(window).scroll(function() {
  if ($(this).scrollTop()>=350) {
    // длительность анимации - 'slow'
    // тип анимации -  'linear'
    $('.desc').fadeIn('slow','linear');
  }
  else {
    // длительность анимации - 'fast'
    // тип анимации -  'swing'
    $('.desc').fadeOut('slow','swing');
  }
});