const handlePressDot = {
  dot0: function () {
    showFeedback(2);
  },
  dot1: function () {
    showFeedback(0);
  },
  dot2: function () {
    showFeedback(1);
  }
};

setInterval(findActive, 2000);
const mark = [];
const points = document.getElementsByClassName('point');

function findActive () {
  for (let i = 0; i < points.length; i++) {
    points[i].addEventListener('click', handlePressDot['dot' + i], false);
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
  let deactivateDot2 = activateDot + 1;
  if (deactivateDot2 === 3) {
    deactivateDot2 = 0;
  }
  points[deactivateDot].classList.remove('active');
  points[deactivateDot2].classList.remove('active');
  points[activateDot].classList.add('active');

  switch (deactivateDot) {
    case 0:
      document.getElementById('feedback-one').classList.add('hide-section');
      document.getElementById('feedback-three').classList.add('hide-section');
      document.getElementById('feedback-two').classList.remove('hide-section');
      break;
    case 1:
      document.getElementById('feedback-one').classList.add('hide-section');
      document.getElementById('feedback-two').classList.add('hide-section');
      document.getElementById('feedback-three').classList.remove('hide-section');
      break;
    case 2:
      document.getElementById('feedback-two').classList.add('hide-section');
      document.getElementById('feedback-three').classList.add('hide-section');
      document.getElementById('feedback-one').classList.remove('hide-section');
      break;
  }

  console.log(mark.indexOf(true));
}
