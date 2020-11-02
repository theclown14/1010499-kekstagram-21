'use strict';
// Наложение фильтров на фотографию
(function () {
  const imgUploadPreview = document.querySelector('.img-upload__preview');
  const effectsForm = document.querySelector('.img-upload__effects');
  let currentFilter;
  const filterChangeHandler = function (evt) {
    if (evt.target.matches('input[type="radio"]')) {
      imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
    }
    imgUploadPreview.classList.remove(currentFilter);
    currentFilter = `effects__preview--${evt.target.value}`;
  };
  effectsForm.addEventListener('change', filterChangeHandler);

  // Интенсивность эффекта (не сделал)

  // const effectLvlPin = document.querySelector('.effect-level__pin');
  // const effectLvlValue = document.querySelector('.effect-level__value');
  // const effectLvlLine = document.querySelector('.effect-level__line');
  // const effectLvlDepth = document.querySelector('.effect-level__depth');
  // effectLvlPin.addEventListener('mouseup', function(){
  // effectLvlValue = effectLvlLine - effectLvlDepth;
  // });
})();