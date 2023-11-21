const searchBox = document.querySelector('.searach-box');
const searchInput = document.querySelector('.searach-box__input');
const searchBtnClose = document.querySelector('.searach-box__btn');
const searchBtnLink = document.querySelector('.searach-box__link');


searchBtnLink.addEventListener('click', (e)=> {
  searchInput.classList.add('searach-box__input--active');
  e.target.classList.add('searach-box__link--hidden');
  searchBtnClose.style.opacity = 1;
  searchBox.style.borderColor = '#555';
})

searchBtnClose.addEventListener('click', (e)=> {
  searchInput.classList.remove('searach-box__input--active');
  searchBtnLink.classList.remove('searach-box__link--hidden');
  searchBtnClose.style.opacity = 0;
  searchBox.style.borderColor = 'transparent';
  searchInput.value = ''
})
