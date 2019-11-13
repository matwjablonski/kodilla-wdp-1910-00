'use strict';
(function () {
  let slideIndex = 1;
  showSlides();

  function showSlides () {
    let smallSlidesAll = document.querySelectorAll('.hot-deal-small-slider');
    let slideLinks = document.querySelectorAll('.dot');
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
  let slideLinks = document.querySelectorAll('.dot');
  for (let element of slideLinks) {
    element.addEventListener('click', showSlide);
  }
})();
