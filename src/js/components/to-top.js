import SmoothScroll from "smooth-scroll";
import 'simplebar';
const scroll = new SmoothScroll(linkToTop);

// const scroll = new SmoothScroll(linkToTop);
const linkToTop = document.querySelector(".to-top");
const catalogContent = document.querySelector('.catalog-content')
const headerBlock = document.querySelector('.header')

if(linkToTop) {
  window.addEventListener('scroll', function() {

    let scrollDistance = this.window.scrollY;

    if(scrollDistance >= catalogContent.offsetTop) {
      headerBlock.classList.add('header-page')
    } else {
      headerBlock.classList.remove('header-page')
    }
  });
}



