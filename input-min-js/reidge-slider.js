const reimgeSlider = document.getElementById('range-slider');
if (reimgeSlider) {
   noUiSlider.create(reimgeSlider, {
      start: [0, 250],
      connect: true,
      step: 1,
      range: {
         'min': [0],
         'max': [500]
      }
   });
   const input0 = document.getElementById('input-0');
   const input1 = document.getElementById('input-1');
   const inputs = [input0, input1];

   reimgeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
   });

   const setRengeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      // console.log(arr);
      reimgeSlider.noUiSlider.set(arr);
   };

   inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
         // console.log(index);
         setRengeSlider(index, e.currentTarget.value);
      });
   });
}