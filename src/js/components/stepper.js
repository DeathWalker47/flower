const stepper = document.querySelector('.stepper')
const stepperInput = stepper.querySelector('.stepper__input');
const stepperBtnMinus = stepper.querySelector('.stepper__btn--minus')
const stepperBtnPlus = stepper.querySelector('.stepper__btn--plus')


if(stepper) {

  let stepperCount = stepperInput.value;

  stepperInput.addEventListener('keyup', (e)=> {
    let self = e.currentTarget;

    if(self.value =='0') {
      self.value = 1;
    }

    stepperCount = self.value;

    if(stepperCount == 1) {
      stepperBtnMinus.classList.add('stepper__btn--disable')
    }else {
      stepperBtnMinus.classList.remove('stepper__btn--disable')
    }

    if(stepperCount == 999) {
      stepperBtnPlus.classList.add('stepper__btn--disable')
    }else {
      stepperBtnPlus.classList.remove('stepper__btn--disable')
    }
  })

  stepperInput.addEventListener('keydown', function(event) {
    // Разрешаем: backspace, delete, tab и escape
    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
      // Разрешаем: Ctrl+A
      (event.keyCode == 65 && event.ctrlKey === true) ||
      // Разрешаем: home, end, влево, вправо
      (event.keyCode >= 35 && event.keyCode <= 39)) {
      // Ничего не делаем
      return;
    } else {
      // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
        event.preventDefault();
      }
    }
  });



  stepperInput.addEventListener('change', (e)=> {
    let self = e.currentTarget;

    if(!self.value) {
      self.value = 1;
    }
    stepperCount = self.value;

    if(stepperCount == 1) {
      stepperBtnMinus.classList.add('stepper__btn--disable')
    }else {
      stepperBtnMinus.classList.remove('stepper__btn--disable')
    }

    if(stepperCount == 999) {
      stepperBtnPlus.classList.add('stepper__btn--disable')
    }else {
      stepperBtnPlus.classList.remove('stepper__btn--disable')
    }
  })


  stepperBtnPlus.addEventListener('click', (e) => {
    e.preventDefault();
    stepperCount++;
    if(stepperCount == 1) {
      stepperBtnMinus.classList.add('stepper__btn--disable')
    }else {
      stepperBtnMinus.classList.remove('stepper__btn--disable')
    }

    if(stepperCount == 999) {
      stepperBtnPlus.classList.add('stepper__btn--disable')
    }else {
      stepperBtnPlus.classList.remove('stepper__btn--disable')
    }
    stepperInput.value = stepperCount;
  })

  stepperBtnMinus.addEventListener('click', (e) => {
    e.preventDefault();
    stepperCount--;
    if(stepperCount == 1) {
      stepperBtnMinus.classList.add('stepper__btn--disable')
    }else {
      stepperBtnMinus.classList.remove('stepper__btn--disable')
    }
    stepperInput.value = stepperCount;
  })


}
