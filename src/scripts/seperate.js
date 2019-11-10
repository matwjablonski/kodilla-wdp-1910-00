'use strict';
(function () {
  let slideIndex = 1;

  let smallSlidesAll = document.querySelectorAll('.hot-deal-small-slider');
  let slideLinks = document.querySelectorAll('.dot');

  function showSlides () {
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
  showSlides();
})();
