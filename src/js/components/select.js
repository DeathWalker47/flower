
const defaultSelect = () => {
  const element = document.querySelector('.default');
  const choices = new Choices(element, {
    searchEnabled:false,

  });
}

defaultSelect();

const btnResetInput = document.querySelector('.reset-filtr')
const btnCategoines = document.querySelectorAll('.categories__btn');
const btnsSelect = document.querySelector('.btns-select');

btnResetInput.addEventListener('click', (e)=> {
  e.preventDefault();
  let chekedInput = document.querySelectorAll('.custom-checkbox__field')
  chekedInput.forEach(el => {
    if(el.checked) {
      el.checked = false
    }
  })
})



btnCategoines.forEach(elem => {
  elem.addEventListener('click', (btn)=> {
    let current = btn.currentTarget;
    current.classList.add('active');
    if(current.classList.contains('active')) {
      let text = current.textContent;
      btnsSelect.insertAdjacentHTML('afterBegin', createItem(text));
    }
  })
})


const createItem = (text) => {
  return (
    `
    <button class="btn-reset btns-select__delete">
      ${text}
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4453 3.15918L10.8413 3.5551L3.5551 10.8407L3.15918 10.4451L10.4453 3.15918Z" fill="#43FFD2"/>
      <path d="M3.5551 3.15918L10.8413 10.4448L10.4453 10.841L3.15918 3.55538L3.5551 3.15918Z" fill="#43FFD2"/>
      </svg>
  </button>
    `
  )
}

btnsSelect.addEventListener('click', (e)=> {
  if(e.target.classList.contains('btns-select__delete')) {
    let btnText = e.target.textContent.trimLeft().trimRight()

    document.querySelector(`[data-text="${btnText}"]`).classList.remove('active')
    console.log(document.querySelector(`[data-text="${btnText}"]`));
    e.target.remove()
  }
})
