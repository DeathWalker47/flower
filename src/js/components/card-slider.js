import Swiper from 'swiper/bundle';



// Маленький слайдер
const sliderCardSmall = new Swiper('.slider-small', {
  slidesPerView: 2,
  speed: 800,
  spaceBetween: 30,
  direction: 'vertical',
    slideToClickedSlide:true,
    watchSlidesProgress: true,
});


// Большой слайдер, который связан с маленьким!!!!
const sliderCardBig = new Swiper('.slider-big', {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 30,
  navigation: {
    nextEl: '.slider-img-left__next',
    prevEl: '.slider-img-left__prev',
  },
  thumbs: {
    swiper: sliderCardSmall
  }
});

