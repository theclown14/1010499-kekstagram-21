'use strict';
// Валидация
(function () {
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
})();