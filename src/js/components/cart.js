
const productBtn = document.querySelectorAll('.product__btn');
const cartProductList = document.querySelector('.card-list');
const cart = document.querySelector('.bag');
const cartQuantity = document.querySelector('.bag__num');
const fullPrice = document.querySelector('.card-bag__fullprice');
let price = 0;


const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
  return price += currentPrice
}

const minusFullPrice = (currentPrice) => {
  return price -= currentPrice
};

const printFullPrice = () => {
  fullPrice.textContent = `${normalPrice(price)}`
};

const printQuantity = () => {
  let length = cartProductList.children.length;
  cartQuantity.textContent = length;
}



const generateCartProudct= (img,title,price,id) => {
  return `
  <li class="card-list__item">
    <article class="bag-card" data-id='${id}'>
      <div class="bag-card__img">
        <img src="${img}" alt="Букет" class="bag-card__image">
      </div>
      <div class="bag-card__info">
        <div class="bag-card__info-top">
          <h3 class="bag-card__info-title">
            ${title}
          </h3>
          <span class="bag-card__info-price">
            ${normalPrice(price)}
          </span>
        </div>
        <div class="bag-card__info-botton">
          <button class="btn-reset bag-card__btn-delete">
            Удалить
          </button>
        </div>
      </div>
    </article>
  </li>
  `;
}

const deleteProducts = (productParent) => {
  let id = productParent.querySelector('.bag-card').dataset.id;
  document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__btn').disabled = false;
  let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.bag-card__info-price').textContent))
  minusFullPrice(currentPrice);
  printFullPrice();
  productParent.remove();
  printQuantity();

}
productBtn.forEach(el => {
  el.closest('.product').setAttribute('data-id', randomId());
  el.addEventListener('click', (e) => {
    let self = e.currentTarget;
    let parent = self.closest('.product');
    let id = parent.dataset.id;
    let img = parent.querySelector('.product__link-img img').getAttribute('src');
    let title = parent.querySelector('.product__title a').textContent;
    // let priceString = parent.querySelector('.product-price__current').textContent
    let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.product-price__current').textContent))

    plusFullPrice(priceNumber);
    printFullPrice();
    cartProductList.insertAdjacentHTML('afterbegin', generateCartProudct(img,title,priceNumber,id))
    printQuantity();
    self.disabled = true;
  })
});

cartProductList.addEventListener('click', (e)=> {
  if(e.target.classList.contains('bag-card__btn-delete')) {
    deleteProducts(e.target.closest('.card-list__item'))
  }
})
