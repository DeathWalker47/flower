import SmoothScroll from "smooth-scroll";
const scroll = new SmoothScroll('a[href*="#catalog-page"]', {
  speed: 600,
});

const linkToTop = document.querySelector(".to-top");
const topSection = document.querySelector(".catalog-page");
