import SmoothScroll from "smooth-scroll";
import 'simplebar';
const linkToTop = document.querySelector(".to-top");
const scroll = new SmoothScroll('.to-top');

const catalogContent = document.querySelector('.catalog-content')
const headerBlock = document.querySelector('.header')


window.addEventListener('scroll', function() {

  let scrollDistance = this.window.scrollY;
  if(scrollDistance >= catalogContent.offsetTop) {
    headerBlock.classList.add('header-page')
  } else {
    headerBlock.classList.remove('header-page')
  }
});

