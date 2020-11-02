'use strict';
// Показ фотографий других пользователей
let arr = [];

const random = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const arrayGenerator = function () {

  for (let i = 0; i < 25; i++) {
    arr[i] = {
      url: `photos/${i + 1}.jpg`,
      description: '',
      likes: random(15, 200),
      comments: [
        {
          avatar: `img/avatar-${random(1, 6)}.svg`,
          message: "Всё отлично!",
          name: "Артем"
        }
      ]
    };
  }
  return arr;
};

arr = arrayGenerator();

const container = document.querySelector('.pictures');
const pictureTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);

for (let i = 0; i < arr.length; i++) {
  let picture = pictureTemplate.cloneNode(true);

  let pictureImage = picture.querySelector('.picture__img');
  let pictureLikes = picture.querySelector('.picture__likes');
  let pictureComments = picture.querySelector('.picture__comments');

  pictureImage.src = arr[i].url;
  pictureLikes.textContent = arr[i].likes;
  pictureComments.textContent = arr[i].comments[0].message;

  container.appendChild(picture);
}


// Показ и скрытие модального окна загруженной фотографии пользователя
const uploadFile = document.querySelector('#upload-file');
const uploadFileClose = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

uploadFile.addEventListener('change', function () {
  imgUploadOverlay.classList.remove('hidden');
});

uploadFileClose.addEventListener('click', function () {
  imgUploadOverlay.classList.add('hidden');
  uploadFile.value = '';
});

uploadFileClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    imgUploadOverlay.classList.add('hidden');
    uploadFile.value = '';
  }
});

// Наложение фильтров на фотографию

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

// Масштаб фотки
// transform:scale();
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

// Валидация

const re = /^#[a-zA-Zа-яА-Яё0-9]{1,19}$/;
const hashtag = document.querySelector('.text__hashtags');
// const imgUploadComment = document.querySelector('.text__description');

const space = ' ';

let hashtagArray = [];
hashtag.addEventListener('input', function () {
  hashtagArray = hashtag.value.split(space);
  for (let i = 0; i < hashtagArray.length; i++) {
    if (re.test(hashtagArray[i]) === false) {
      hashtag.setCustomValidity('Не является хэштегом');
      if (re.test(hashtagArray[i]) === false && hashtagArray[i].length > 20) {
        hashtag.setCustomValidity('Масимум 20 символов');
      }
    }
    else if (hashtagArray.length > 5) {
      hashtag.setCustomValidity('Масимум 5 хэш-тегов');
    }
    else {
      hashtag.setCustomValidity('');
    }
    hashtag.reportValidity();
  }
});
