'use strict';

(function () {
  let slideIndex = 1;
  prevButton();
  nextButton();
  const slides = document.querySelectorAll('.hot-deal-furnitures-img');

  function prevButton () {
    let prevButton = document.getElementById('hot-deal-prev');
    prevButton.addEventListener('click', function () {
      slideIndex--;
      for (let element of slides) {
        element.classList.remove('active');
        if (slideIndex < 1) {
          slideIndex = slides.length;
        }
        slides[slideIndex - 1].classList.add('active');
      }
    });
  }
  function nextButton () {
    let prevButton = document.getElementById('hot-deal-next');
    prevButton.addEventListener('click', function () {
      slideIndex++;
      for (let element of slides) {
        element.classList.remove('active');
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].classList.add('active');
      }
    });
  }
})();
