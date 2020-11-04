'use strict';
// Показ и скрытие модального окна загруженной фотографии пользователя
(function () {
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
})();