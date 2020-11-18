'use strict';

(function () {
    const imgFilters = document.querySelector('.img-filters');
  imgFilters.classList.remove('img-filters--inactive');
  const imgFiltersForm = document.querySelector('.img-filters__formimg-filters__form');
  const filterDefault = document.getElementById('filter-default');
  const filterRandom = document.getElementById('filter-random');
  const filterDiscussed = document.getElementById('filter-discussed');
    
    
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;    
}
    
  function pictureRemove(){
      const picturesArr = document.querySelectorAll('.pictures .picture'); 
      picturesArr.forEach(function(picture){
          picture.remove();
      })
  }

  filterDefault.addEventListener('click', function(){
      filterDefault.classList.add('img-filters__button--active');
      filterRandom.classList.remove('img-filters__button--active');

      pictureRemove();
      setPictures(arrayGenerator()); 
  })
    

    filterRandom.addEventListener('click', function(){
      filterRandom.classList.add('img-filters__button--active');
      filterDefault.classList.remove('img-filters__button--active');
      let shuffledArr = shuffle(arr);
      pictureRemove(); 
      setPictures(shuffledArr); 
  })
    
    filterDiscussed.addEventListener('click', function(){
      filterDiscussed.classList.add('img-filters__button--active');
  })
})();