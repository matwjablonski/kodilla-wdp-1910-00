'use strict';

if (window.innerWidth > 900) {
  (function () {
    let slideIndex = 1;
    showSlides();

    function showSlides () {
      const smallSlidesAll = document.querySelectorAll('.hot-deal-small-slider');
      const slideLinks = document.querySelectorAll('.dot');
      for (let element of smallSlidesAll) {
        element.classList.remove('active');
      }
      for (let element2 of slideLinks) {
        element2.className = element2.className.replace('active', '');
      }
      slideIndex++;
      if (slideIndex > smallSlidesAll.length) {
        slideIndex = 1;
      }
      smallSlidesAll[slideIndex - 1].classList.add('active');
      slideLinks[slideIndex - 1].classList.add('active');
      setTimeout(showSlides, 3000);
    }
  })();
} else {
  (function () {
    let slideIndex;
    let touchobj;
    let startX = 0;
    let dist = 0;
    const slides = document.querySelectorAll('.hot-deal-small-slider');
    const slideLinks = document.querySelectorAll('.dot');

    function onStart (event) {
      touchobj = event.changedTouches[0];
      startX = parseInt(touchobj.clientX);
    }

    function onMove (event) {
      event.preventDefault();
      touchobj = event.changedTouches[0];
      dist = parseInt(touchobj.clientX) - startX;
      event.currentTarget.classList.remove('active');
      for (let element of slideLinks) {
        element.className = element.className.replace(' active', '');
      }
      if (dist < 0) {
        slideIndex = event.currentTarget.getAttribute('data-value');
        slideIndex--;
        if (slideIndex < 1) {
          slideIndex = slides.length;
        }
      }
      if (dist > 0) {
        slideIndex = event.currentTarget.getAttribute('data-value');
        slideIndex++;
        if (slideIndex === slides.length + 1) {
          slideIndex = 1;
        }
      }
      let slideIndexString = slideIndex.toString();
      let selector = '.hot-deal-small-slider[data-value="' + slideIndexString + '"]';
      let slideToSwipe = document.querySelector(selector);
      slideToSwipe.classList.add('active');
      let selector2 = '.dot[data-target="' + slideIndexString + '"]';
      let slideToSwipe2 = document.querySelector(selector2);
      slideToSwipe2.classList.add('active');
    }

    for (let element of slides) {
      element.ontouchstart = onStart;
      element.ontouchmove = onMove;
    }
  })();
}

let showSlide = function (event) {
  event.preventDefault();
  const slideAll = document.querySelectorAll('.slide');
  for (let element of slideAll) {
    element.classList.remove('active');
  }
  let slideName = event.target.getAttribute('href');
  slideName = slideName.substr(1);
  let slideWindow = document.getElementById(slideName);
  slideWindow.classList.add('active');

  for (let el of slideLinks) {
    el.addEventListener('click', function (e) {
      for (let el2 of slideLinks) {
        el2.classList.remove('active');
      }
      e.target.classList.add('active');
    });
  }
};
const slideLinks = document.querySelectorAll('.dot');
for (let element of slideLinks) {
  element.addEventListener('click', showSlide);
}
