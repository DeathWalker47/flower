import noUiSlider from 'nouislider';

const rangeSlider = document.getElementById('range-slider')

if(rangeSlider ) {
  noUiSlider.create(rangeSlider, {
    start: [50, 10000],
    connect: true,
    step: 1,
    range: {
        'min': 50,
        'max': 10000
    }
});

const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');
const inputs = [input0, input1]


rangeSlider.noUiSlider.on('update', function(values, handle) {
  inputs[handle].value = values[handle]
})

const serRangeSlider = (i, value) => {
  let arr = [null,null];
  arr[i] = value;

  rangeSlider.noUiSlider.set(arr)
};

inputs.forEach((el, index) => {
  el.addEventListener('change', (e) => {
    serRangeSlider(index, e.currentTarget.value)
  })
})
}
