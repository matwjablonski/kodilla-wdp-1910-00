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

// Section Gallery
const galleryTabs = ['#featured', '#top-seller', '#sale-off', '#top-rated'];

for (let galleryTab of galleryTabs) {
  initializeGalleryTab(galleryTab);
}

function initializeGalleryTab (galleryTab) {
  const slider = tns({
    container: galleryTab + ' .thumbnail-slider-inner',
    mouseDrag: true,
    controls: false,
    nav: false,
    items: 3,
    slideBy: 'page',
    responsive: {
      576: {
        items: 6
      },
      768: {
        items: 3
      },
      992: {
        items: 6
      },
      1200: {
        items: 6
      }
    }
  });

  const galleryNextArrows = document.querySelectorAll(
    galleryTab + ' .gallery-arrow.next'
  );
  const galleryPrevArrows = document.querySelectorAll(
    galleryTab + ' .gallery-arrow.prev'
  );

  const galleryItems = document.querySelectorAll(galleryTab + ' .gallery-item');

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

  for (let galleryPrevArrow of galleryPrevArrows) {
    galleryPrevArrow.addEventListener('click', function (e) {
      e.preventDefault();

      slider.goTo('prev');
    });
  }

  for (let galleryItem of galleryItems) {
    galleryItem.addEventListener('click', function (e) {
      e.preventDefault();

      for (let notClickedItem of galleryItems) {
        notClickedItem.classList.remove('active');
      }

      let currentGalleryItem = e.currentTarget;
      currentGalleryItem.classList.add('active');
      const image = currentGalleryItem.querySelector('img').getAttribute('src');

      let selectedProductImage = currentGalleryItem
        .closest('.tab-pane')
        .querySelector('.selected-product img');
      selectedProductImage.setAttribute('src', image);
    });
  }
}
(function () {
  tns({
    container: '.bed-container',
    items: 1,
    slideBy: 'page',
    speed: 2000,
    controls: false,
    autoplay: false,
    autoplayButtonOutput: false,
    preventScrollOnTouch: 'auto',
    mouseDrag: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  tns({
    container: '.chair-container',
    items: 1,
    slideBy: 'page',
    speed: 2000,
    controls: false,
    autoplay: false,
    autoplayButtonOutput: false,
    preventScrollOnTouch: 'auto',
    mouseDrag: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  tns({
    container: '.sofa-container',
    items: 1,
    slideBy: 'page',
    speed: 2000,
    controls: false,
    autoplay: false,
    autoplayButtonOutput: false,
    preventScrollOnTouch: 'auto',
    mouseDrag: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  tns({
    container: '.table-container',
    items: 1,
    slideBy: 'page',
    speed: 2000,
    controls: false,
    autoplay: false,
    autoplayButtonOutput: false,
    preventScrollOnTouch: 'auto',
    mouseDrag: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  tns({
    container: '.dining-container',
    items: 1,
    slideBy: 'page',
    speed: 2000,
    controls: false,
    autoplay: false,
    autoplayButtonOutput: false,
    preventScrollOnTouch: 'auto',
    mouseDrag: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
})();
