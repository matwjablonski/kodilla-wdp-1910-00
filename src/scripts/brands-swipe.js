'use strict';

document.querySelector('.carousel-inner').addEventListener('touchstart', startX);
let clientX, deltaX;

function startX (ev) {
  clientX = ev.touches[0].clientX;
}

document.querySelector('.carousel-inner').addEventListener('touchend', endX);

function endX (ev) {
  deltaX = ev.changedTouches[0].clientX - clientX;
  deltaX > 0 ? pressArrow('left') : pressArrow('right');
}

function pressArrow (direction) {
  if (direction === 'left') {
    document.getElementById('left').click();
  } else if (direction === 'right') {
    document.getElementById('right').click();
  }
}
