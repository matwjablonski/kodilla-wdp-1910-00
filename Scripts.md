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

tns is the main variable used in the script that introducess Tiny Slider features.

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

Function findActive is responsible for seting the activePosition variable up and each 3000ms it triggers showFeedback function with arguments of active possition passed .

Function showFeedback is responsible for switching the hide-section class what actually means making
the particular slide visible/invisible.

### hot-deal-slider-main.js

**Purpose**

This script aims at allowing mobile user, to easy swipe pictures of brands inside the carousel by his/her finger(s). Technical aspect is described in MDN: [link](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events)

The logic is common with **brands-swipe.js**

**Variables**

    const handlePressDot

    This Object contains all functions that are used to simulate pressing on 'dot' by mouse, that induces carousel rotation in case of user swipe activities.

    let activePosition

    This variables stores the position number of currebt active slide.

**Functions**

    function findActive ()

    function showFeedback (deactivateDot)

Function findActive is responsible for seting the activePosition variable up and each 3000ms it triggers showFeedback function with arguments of active possition passed .

Function showFeedback is responsible for switching the hide-section class what actually means making
the particular slide visible/invisible.

### hot-deal-slider-side.js

### hot-deal-swipe.js

### section-products.js

### top-menu-select.js
