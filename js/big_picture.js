'use strict';

//большая фотка первая 
(function () {
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImg = document.querySelector('.big-picture__img');
  
  const bigPhoto = bigPictureImg.getElementsByTagName('img')[0];
    
  const likesCount = document.querySelector('.likes-count');
  const commentsCount = document.querySelector('.comments-count');
  const socialComment = document.querySelector('.social__comment');
  const socialCaption = document.querySelector('.social__caption');
  const socialPicture = document.querySelector('.social__picture');
  const socialText = document.querySelector('.social__text');
    
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  
  bigPicture.classList.remove('hidden');
  
  bigPhoto.src = arr[0].url;
  likesCount.textContent = arr[0].likes;
  commentsCount.textContent = arr[0].comments.length;
  
  socialPicture.src = arr[0].comments[0].avatar;
  socialPicture.alt = arr[0].comments[0].name;
  socialText.textContent = arr[0].comments[0].message;
  socialCaption.textContent = arr[0].description;
  
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
    
  //закрытие большой фотки
  const bigPictureCancel = document.querySelector('.big-picture__cancel');
  const bigPicturePreview = document.querySelector('.big-picture__preview');
    
  bigPictureCancel.addEventListener('click', function () {
    bigPicturePreview.classList.add('hidden');
    document.body.classList.remove('modal-open');
    bigPicture.classList.remove('overlay');
  });
    
  bigPictureCancel.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      bigPicturePreview.classList.add('hidden');
      document.body.classList.remove('modal-open');
      bigPicture.classList.remove('overlay');
    }
  });
   
  //открытие фотки в большом размере
//    const pictureTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);
//    const pictureImg = pictureTemplate.querySelector('.picture__img');
      const picturesContainer = document.querySelector('.pictures'); 
    
    picturesContainer.addEventListener('click', function (evt){
      if(evt.target.tagName==='IMG'){
          const pictureImg = evt.target;
        console.log(evt.target);
      bigPicturePreview.classList.remove('hidden');
      document.body.classList.add('modal-open');
      bigPicture.classList.add('overlay'); 
      }
    })
})();