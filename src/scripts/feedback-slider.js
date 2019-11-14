function findActive () {
  let mark = [];
  let points = document.getElementsByClassName('point');
  for (let i = 0; i < points.length; i++) {
    mark[i] = points[i].classList.contains('active');
  }
  let activePosition = mark.indexOf(true);
  showFeedback(activePosition);
}
function showFeedback (deactivateDot) {
  let activateDot = deactivateDot + 1;
  if (activateDot === 3) {
    activateDot = 0;
  }

  let points = document.getElementsByClassName('point');
  points[deactivateDot].classList.remove('active');
  points[activateDot].classList.add('active');

  switch (deactivateDot) {
    case 0:
      document.getElementById('feedback-one').classList.add('hide-section');
      document.getElementById('feedback-two').classList.remove('hide-section');
      break;
    case 1:
      document.getElementById('feedback-two').classList.add('hide-section');
      document.getElementById('feedback-three').classList.remove('hide-section');
      break;
    case 2:
      document.getElementById('feedback-three').classList.add('hide-section');
      document.getElementById('feedback-one').classList.remove('hide-section');
      break;
  }
  setTimeout(findActive, 2000);
}
findActive();
