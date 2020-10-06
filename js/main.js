'use strict'

let arr = [];
let arrayGenerator = function() {
    
    for (let i = 0; i < 25; i++){
        arr[i] = {
            url: 'photos/${i}.jpg',//work?
            description: '',
            likes: 3,//random
            comments: [
                {
                    avatar: "img/avatar-${i}.svg",
                    message: "В целом всё неплохо. Но не всё.",
                    name: "Артем"//do it randomic
                }
            ]
        };
    
    };
    return arr;
};

arr = arrayGenerator();

let container =  document.querySelector('.pictures');

for (let i = 0; i < arr.length; i++){
  let picture = document.querySelector('#picture');
    picture = picture.cloneNode();
let pictureImage = picture.querySelector('.picture__img');
let pictureLikes = picture.querySelector('.picture__likes');
let pictureComments = picture.querySelector('.picture__comments');

pictureImage.src = arr[i].url;
pictureLikes.textContent = arr[i].likes;
pictureComments.textContent = arr[i].comments;

    container.appendChild(picture);
}
