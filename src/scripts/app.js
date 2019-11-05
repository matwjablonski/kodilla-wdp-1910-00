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
