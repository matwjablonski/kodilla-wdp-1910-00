const allElements = ['bed', 'chair', 'sofa', 'table', 'dining'];
const elementActive = document.getElementsByClassName('fade-in');
const links = document.getElementsByTagName('a');

for (let link = 0; link < links.length; link++) {
  let link2check = links[link].href;
  for (let value of allElements) {
    if (link2check.includes('#' + value)) {
      links[link].addEventListener(
        'click',
        function () {
          changeFurniture(value);
        },
        false
      );
    }
  }
}

function changeFurniture (furnitureType) {
  document.getElementById(elementActive[0]['id']).classList.toggle('d-none');
  document.getElementById(elementActive[0]['id']).classList.toggle('fade-in');
  document.getElementById(furnitureType).classList.toggle('d-none');
  document.getElementById(furnitureType).classList.toggle('fade-in');
}
