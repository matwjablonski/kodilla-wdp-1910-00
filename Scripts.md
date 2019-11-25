# JS Scripts

## Assumptions

- Project has been developed based on HTML5, Bootstrap4, CSS3 and Vanilla JS (ECMA 2015) with no usage of general purpose external JS library like jQuery.
- The specific purpose libraries like Tiny-Slider has been used.
  _https://github.com/ganlanyuan/tiny-slider_ [link](https://github.com/ganlanyuan/tiny-slider)

## List of scripts

**All scripts are located in src/scripts directory**

1. app.js
2. brands-swipe.js
3. feedback-slider.js
4. hot-deal-slider-main.js
5. hot-deal-slider-side.js
6. hot-deal-swipe.js
7. section-products.js
8. top-menu-select.js

### app.js

**Purpose**

This script adds Tiny Slider _https://github.com/ganlanyuan/tiny-slider_ [link](https://github.com/ganlanyuan/tiny-slider) to the application.

**Variables**

tns is the main variable used in the script that introduces Tiny Slider features.

import { tns } from './../../node_modules/tiny-slider/src/tiny-slider'

const allStars is array like collection of all elements that contain star class.

const galleryTabs contains IDs of all Gallery Section's tabs.

const blogDots is array like collection of all 'a' elements having class blog-dots.

**Functions**

    function initializeGalleryTab (galleryTab)

    Tiny Slider instance const blog = tns({})

Functions mentioned above are constructed as described in Tiny Slider docs available at GitHub.

### brands-swipe.js

**Purpose**

This script aims at allowing mobile user, to easy swipe pictures of brands inside the carousel by his/her finger(s). Technical aspect is described in MDN: [link](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events)

**Variables**

    let clientX;

    let deltaX;

clientX stores the position of finger swipe start point.
deltaX stores the result of deducting end point of swipe and start point of swipe.
Based on the deltaX positive or negative value (it cannot be zero) the direction of swipe is detected.

**Functions**

    function startX (touchEvent)

    function endX (touchEvent)

    function pressArrow (direction)

startX and endX functions assign particular value to startX endX variables.
Function pressArrow simulates mouse clik on left (when deltaX > 0) or right (when deltaX < 0) button of carousel.

### feedback-slider.js

**Purpose**

This script aims at allowing mobile user, to easy swipe pictures of brands inside the carousel by his/her finger(s). Technical aspect is described in MDN: [link](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events)

The logic is common with **brands-swipe.js**

**Variables**

    const handlePressDot

    This Object contains all functions that are used to simulate pressing on 'dot' by mouse, that induces carousel rotation in case of user swipe activities.

    let activePosition

    This variables stores the position number of current active slide.

**Functions**

    function findActive ()

    function showFeedback (deactivateDot)

Function findActive is responsible for seting the activePosition variable up and each 3000ms it triggers showFeedback function with arguments of active position passed.

Function showFeedback is responsible for switching the hide-section class what actually means making
the particular slide visible/invisible.

### hot-deal-slider-main.js

**Purpose**

This script adds slide show feature to Hot Deal section.

**Variables**

    const smallSlidesAll

    This array like collections contain all elements with class hot-deal-small-slider.

    const slideLinks

    This array like collections contain all elements with class dot.

    const slideAll

    This array like collections contain all elements with class slide.

**Functions**

    function showSlides

Function showSlides is taking care of adding and removing class active in the time interval of 3000ms to elements specified by SlideIndex counter.

Script does recognize if device window is wider than 991px and in case it is not adding swipe functionalities to the code.

### hot-deal-slider-side.js

**Purpose**

This script adds click operation to next/prev buttons.

**Variables**

    let slideIndex = 1

    It sets up initial slide.

**Functions**

    function prevButton ()

    function nextButton

Functions above add EventListener to next/prev button that waits for click operations.
When it happens the slideIndex is increased(next) or decreased(prev) and class active is switched to new slide that becomes active current slide.

### hot-deal-swipe.js

**Purpose**

This script aims at allowing mobile user, to easy swipe pictures of brands inside the carousel by his/her finger(s). Technical aspect is described in MDN: [link](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events)

The logic is common with **brands-swipe.js**

**Variables**

    let slideIndex;
    let touchobj;
    let startX = 0;
    let dist = 0;

Variables shown above are used by function onStart (event) and function onMove (event).

    const slides

Slides is array like collection that stores all elements with class hot-deal-furnitures-img.

**Functions**

    function onStart (event)

    function onMove (event)

Function onStart is setting up touchobj and startX variables.

Function onMove is responsible for switching the active class what actually means making
the carousel to rotate.

### section-products.js

**Purpose**

This script allows to select a category in New Furniture section.

**Variables**

    const allElements = ['bed', 'chair', 'sofa', 'table', 'dining'];
    const elementActive = document.getElementsByClassName('fade-in');
    const links = document.getElementsByTagName('a');

allElements is an array with list of furnitures types.

elementActive is a number of position of HTML element that contain fade-in class what means is currently active.

links is a collection of HTML 'a' tags.

**Functions**

    function changeFurniture (furnitureType)

Function changeFuriniture is responsible for switching d-none class and fade-in class what means making the not chosen furniture groups invisible and showing the one that was chosen.

### top-menu-select.js

**Purpose**

This script allows to select a category of furniture in search section.

**Variables**

    const allOptions

allOptions stores HTML collection of all elements with class category-list-head but not li element with class select-first-element

let val
val is a value of text that represents selected group of furniture.

**Method**

addEventListener method changes the selected to search value to variable val value on the click on mouse event.
