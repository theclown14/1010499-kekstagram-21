'use strict';
(function () {
  window.load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    
    xhr.responseType = 'json';
    
    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });
    
    xhr.open('GET', 'https://21.javascript.pages.academy/kekstagram/data');
    
    xhr.send();
  }
})();