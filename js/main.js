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
