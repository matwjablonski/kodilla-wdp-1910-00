const allStars = document.querySelectorAll('.stars');

for (let i = 0; i < allStars.length; i++) {
  allStars[i].addEventListener('mouseover', function (e) {
    let action = 'add';
    for (let element of this.children) {
      element.classList[action]('hover');
      if (element === e.target) action = 'remove';
    }
  });
}

for (let j = 0; j < allStars.length; j++) {
  allStars[j].addEventListener('mouseout', function (e) {
    let action = 'remove';
    for (let element of this.children) {
      element.classList[action]('hover');
      if (element === e.target) action = 'remove';
    }
  });
}

for (let k = 0; k < allStars.length; k++) {
  allStars[k].addEventListener('click', function (e) {
    let action = 'add';
    for (let element of this.children) {
      element.classList[action]('select', 'full');
      if (element === e.target) action = 'remove';
    }
  });
}
