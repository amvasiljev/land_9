$(function () {
  $('.lazy').Lazy();
});



// inputs
$(document).on('focus', 'input', function () {
  $(this).addClass('input_focus');

  $(this).parent().css('color','transparent')
})
$(document).on('blur', 'input', function () {
  if (!$(this).val()) {
    $(this).removeClass('input_focus');
    $(this).parent().css('color','rgba(255, 255, 255, 0.46)')
  }
})



// inputs




// slider 

var arrow_next = '<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18149 7.87752L2.36528 1.06132C1.95556 0.651597 1.333 0.651597 0.915389 1.06132C0.505661 1.47105 0.505661 2.09361 0.915389 2.51131L6.90417 8.50008L0.915389 14.4889C0.505661 14.8986 0.505661 15.5211 0.915389 15.9388C1.12025 16.1436 1.32512 16.246 1.64038 16.246C1.84525 16.246 2.16051 16.1436 2.46772 16.0412L9.18149 9.32742C9.38635 9.12255 9.48888 8.91769 9.48888 8.60243C9.48888 8.29513 9.38644 8.08239 9.18149 7.87752Z" fill="#1A1A1A"/></svg>'
var arrow_prev = '<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18149 7.87752L2.36528 1.06132C1.95556 0.651597 1.333 0.651597 0.915389 1.06132C0.505661 1.47105 0.505661 2.09361 0.915389 2.51131L6.90417 8.50008L0.915389 14.4889C0.505661 14.8986 0.505661 15.5211 0.915389 15.9388C1.12025 16.1436 1.32512 16.246 1.64038 16.246C1.84525 16.246 2.16051 16.1436 2.46772 16.0412L9.18149 9.32742C9.38635 9.12255 9.48888 8.91769 9.48888 8.60243C9.48888 8.29513 9.38644 8.08239 9.18149 7.87752Z" fill="#1A1A1A"/></svg>'


$('.vebinar__slider').slick({
  lazyload: 'ondemand',
  // infinite: false,
  // fade: true,
  // cssEase: 'linear',
  arrows: false,
  dots: true,
})
$('.team__slider').slick({
  lazyload: 'ondemand',
  // infinite: false,
  // fade: true,
  // cssEase: 'linear',
  arrows: false,
  dots: true,
})



$('.review__slider').slick({
  lazyload: 'ondemand',
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,

  nextArrow: '<div class="review__arrow review__arrow_next">' + arrow_next + '</div>',
  prevArrow: '<div class="review__arrow review__arrow_prev">' + arrow_prev + '</div>',
  appendArrows: $('.review__arrows'),

})



const mediaQuery_767 = window.matchMedia('(max-width: 767px)')


function reasonSlider(e) {
  if (e.matches) {
    $('.section__box_reason').slick({
      lazyload: 'ondemand',
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      // nextArrow: '<div class="slider__arrow slider__arrow_next slider__arrow_next_video">' + arrow_next + '</div>',
      // prevArrow: '<div class="slider__arrow slider__arrow_prev slider__arrow_prev_video">' + arrow_prev + '</div>',
      // appendArrows: $('.slider__arrows_video'),
      // appendDots: $('.slider__dots_video'),

    })
    $('.section__box_reason').addClass('reasonMobile')
    // appendDots()
  } else {
    if ($('.reasonMobile').length > 0) {
      $('.section__box_reason').slick('unslick');
    }

  }
}
function causeSlider(e) {
  if (e.matches) {
    $('.section__box_cause').slick({
      lazyload: 'ondemand',
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      // nextArrow: '<div class="slider__arrow slider__arrow_next slider__arrow_next_video">' + arrow_next + '</div>',
      // prevArrow: '<div class="slider__arrow slider__arrow_prev slider__arrow_prev_video">' + arrow_prev + '</div>',
      // appendArrows: $('.slider__arrows_video'),
      // appendDots: $('.slider__dots_video'),

    })
    $('.section__box_cause').addClass('causeMobile')
    // appendDots()
  } else {
    if ($('.causeMobile').length > 0) {
      $('.section__box_cause').slick('unslick');
    }

  }
}


mediaQuery_767.addListener(reasonSlider)
reasonSlider(mediaQuery_767)
mediaQuery_767.addListener(causeSlider)
causeSlider(mediaQuery_767)