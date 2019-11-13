'use strict';

document.querySelector('.carousel-inner').addEventListener('touchstart', startX);
let clientX;
let deltaX;

function startX (touchEvent) {
  clientX = touchEvent.touches[0].clientX;
}

document.querySelector('.carousel-inner').addEventListener('touchend', endX);

function endX (touchEvent) {
  deltaX = touchEvent.changedTouches[0].clientX - clientX;
  deltaX > 0 ? pressArrow('left') : pressArrow('right');
}

function pressArrow (direction) {
  document.getElementById(direction).click();
}
