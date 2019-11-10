import { tns } from './../../node_modules/tiny-slider/src/tiny-slider';

// Stars
const allStars = document.querySelectorAll('.stars');

for (let x of allStars) {
  x.addEventListener('mouseover', function (e) {
    let action = 'add';
    let action2 = 'remove';
    for (let element of this.children) {
      element.classList[action]('hover');
      element.classList[action2]('full');
      if (element === e.target) {
        action = 'remove';
      }
    }
  });
}

for (let y of allStars) {
  y.addEventListener('mouseout', function (e) {
    let action = 'remove';
    for (let element of this.children) {
      element.classList[action]('hover');
      if (element === e.target) {
        action = 'remove';
      }
    }
  });
}

for (let z of allStars) {
  z.addEventListener('click', function (e) {
    let action = 'add';
    for (let element of this.children) {
      element.classList[action]('select', 'full');
      if (element === e.target) {
        action = 'remove';
      }
    }
  });
}

const slider = tns({
  container: '.thumbnail-slider-inner',
  mouseDrag: true,
  controls: false,
  nav: false,
  items: 6,
  slideBy: 'page'
});

const galleryNextArrows = document.querySelectorAll(
  '.gallery-container .gallery-arrow.next'
);
const galleryPrevArrows = document.querySelectorAll(
  '.gallery-container .gallery-arrow.prev'
);

for (let galleryNextArrow of galleryNextArrows) {
  galleryNextArrow.addEventListener('click', function (e) {
    e.preventDefault();

    slider.goTo('next');
  });
}

for (let galleryPrevArrow of galleryPrevArrows) {
  galleryPrevArrow.addEventListener('click', function (e) {
    e.preventDefault();

    slider.goTo('prev');
  });
}
