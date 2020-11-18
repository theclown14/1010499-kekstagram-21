'use strict';
// Показ фотографий других пользователей
let arr = [];

const random = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

 window.arrayGenerator = function () {

  for (let i = 0; i < 25; i++) {
    arr[i] = {
      url: `photos/${i + 1}.jpg`,
      description: 'Во такое фото сделал',
      likes: random(15, 200),
      comments: [
        {
          avatar: `img/avatar-${random(1, 6)}.svg`,
          message: "Всё отлично!",
          name: "Артем"
        },
        {
          avatar: `img/avatar-${random(1, 6)}.svg`,
          message: "Всё клас!",
          name: "Коля"
        },
        {
          avatar: `img/avatar-${random(1, 6)}.svg`,
          message: "Всё прилично!",
          name: "Ваня"
        }  
      ]
    };
  }
  return arr;
};

arr = arrayGenerator();

function setPictures(arr){
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
}

 
//для подключения load_data
window.load(setPictures, function() {
    
});  
    
