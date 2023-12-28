'use strict';

const deleteItself = document.querySelector('#deleteItself');
deleteItself.addEventListener('click', (e) => {
  e.currentTarget.remove();
});
