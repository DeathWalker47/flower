const cardBag = document.querySelector(".card-bag");
const closeBtnBag = document.querySelector(".card-bag__close");
const bagBtn = document.querySelectorAll(".bag");
const blureBox = document.querySelector(".wrapper");
const bagOverlay = document.querySelector(".card-bag-overlay");

if (cardBag) {
  closeBtnBag.addEventListener("click", (e) => {
    e.preventDefault();
    cardBag.classList.remove("card-bag--active");
    bagOverlay.classList.remove("active");
    // document.querySelector('.wrapper').classList.remove('blure');
  });

  // cardBag.addEventListener('click', (e)=> {
  //   cardBag.classList.remove('card-bag--active');
  //   document.querySelector('.wrapper').classList.remove('blure');
  // })
}

bagBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    let current = e.currentTarget;
    cardBag.classList.add("card-bag--active");
    bagOverlay.classList.add("active");
    // document.querySelector('.wrapper').classList.add('blure');
  });
});
