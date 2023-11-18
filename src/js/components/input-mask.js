import inputmask from 'inputmask';
const tel = document.querySelectorAll('input[type*="tel"]');

const im = new Inputmask("+7 (999) 999-99-99");
im.mask(tel);
