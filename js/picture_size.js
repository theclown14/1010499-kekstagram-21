'use strict';
// Масштаб фотки
// transform:scale();
(function () {
  const scaleControlSmaller = document.querySelector('.scale__control--smaller');
  const scaleControlBigger = document.querySelector('.scale__control--bigger');
  const scaleControlValue = document.querySelector('.scale__control--value');
  let scaleControl = scaleControlValue.value.slice(0, -1);
  scaleControlSmaller.addEventListener('click', function () {
    if (scaleControlValue.value !== '25%') {
      scaleControl -= 25;
      scaleControlValue.value = scaleControl;
      // imgUploadPreview.style.cssText = `transform:scale(${scaleControleValue.value/100})`;
      scaleControlValue.value += '%';
    }
  });
  scaleControlBigger.addEventListener('click', function () {
    if (scaleControlValue.value !== '100%') {
      scaleControl += 25;
      scaleControlValue.value = scaleControl;
      scaleControlValue.value += '%';
    }
  });
})();