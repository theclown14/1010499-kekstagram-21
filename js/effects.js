'use strict';
// Наложение фильтров на фотографию
(function () {
  const imgUploadPreview = document.querySelector('.img-upload__preview');
  const effectsForm = document.querySelector('.img-upload__effects');
  let currentEffect;
  const effectsChangeHandler = function (evt) {
    if (evt.target.matches('input[type="radio"]')) {
      imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
    }
    imgUploadPreview.classList.remove(currentEffect);
    currentEffect = `effects__preview--${evt.target.value}`;
  };
  effectsForm.addEventListener('change', effectsChangeHandler);

  // Интенсивность эффекта (не сделал)

   const effectLvlPin = document.querySelector('.effect-level__pin');
   const effectLvlValue = document.querySelector('.effect-level__value');
   const effectLvlLine = document.querySelector('.effect-level__line');
   const effectLvlDepth = document.querySelector('.effect-level__depth');
    const LINE_WIDTH = 453;
   let isMove = false; 
   
   
    document.addEventListener('mousemove', function(evt){
     if(isMove){

         const newValue = (evt.offsetX * 100) / LINE_WIDTH;
         effectLvlDepth.style.width = newValue + '%';
         effectLvlPin.style.left = newValue + '%';
         effectLvlValue.value = newValue;
         console.log(newValue);
         console.log(LINE_WIDTH);
     }
       
    });
    
    effectLvlPin.addEventListener('mousedown', function(){
     isMove = true;
       
    });
    
   effectLvlPin.addEventListener('mouseup', function(){
       isMove = false;
   });
    
    
})();