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

### hot-deal-slider-main.js

### hot-deal-slider-side.js

### hot-deal-swipe.js

### section-products.js

### top-menu-select.js
