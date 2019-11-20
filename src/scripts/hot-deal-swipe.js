'use strict';
(function () {
  let slideIndex;
  let touchobj;
  let startX = 0;
  let dist = 0;
  const slides = document.querySelectorAll('.hot-deal-furnitures-img');

  function onStart (event) {
    touchobj = event.changedTouches[0];
    startX = parseInt(touchobj.clientX);
  }

  function onMove (event) {
    event.preventDefault();
    touchobj = event.changedTouches[0];
    dist = parseInt(touchobj.clientX) - startX;
    event.target.classList.remove('active');
    if (dist < 0) {
      slideIndex = event.target.getAttribute('data-value');
      slideIndex--;
      if (slideIndex < 1) {
        slideIndex = slides.length;
      }
    }
    if (dist > 0) {
      slideIndex = event.target.getAttribute('data-value');
      slideIndex++;
      if (slideIndex === slides.length + 1) {
        slideIndex = 1;
      }
    }
    let slideIndexString = slideIndex.toString();
    let selector = '.hot-deal-furnitures-img[data-value="' + slideIndexString + '"]';
    let slideToSwipe = document.querySelector(selector);
    slideToSwipe.classList.add('active');
  }

  for (let element of slides) {
    element.ontouchstart = onStart;
    element.ontouchmove = onMove;
  }
})();
