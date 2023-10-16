let accardeon = document.querySelectorAll('.accardeon__item');

accardeon.forEach(el => {
  el.addEventListener('click', (e) => {
    const self = e.currentTarget;
    const content = self.querySelector('.accardeon__content');

    // Проходимся циклом по каждому аккардеону и убираем у всех у них класс опен
    document.querySelectorAll('.accardeon__item').forEach(el => {
      el.classList.remove('accardeon__item--open')
      el.querySelector('.accardeon__content').style.maxHeight = null;
    })

    self.classList.toggle('accardeon__item--open');

    if(self.classList.contains('accardeon__item--open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }

  })
})
