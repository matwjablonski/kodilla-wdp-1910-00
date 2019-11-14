function showFeedback () {
  let points = document.getElementsByClassName('point');
  console.log(points);
  if (points[0].classList.contains('acive')) {
    console.log('jest');
  } else {
    console.log('nie ma');
  }
}
showFeedback();
