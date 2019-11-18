let sibling = document.querySelectorAll('ul li:not(.init)');

document.getElementById('init').addEventListener('click', function () {
  for (let element of sibling) {
    element.classList.toggle('list');
    element.classList.remove('selected');
  }
});

let allOptions = document.querySelectorAll('ul li:not(.init)');

for (let element2 of allOptions) {
  element2.addEventListener('click', function (e) {
    let action = 'toggle';
    e.target.classList[action]('selected');
    let val = e.target.innerText;
    document.getElementById('init').innerText = '';
    document.getElementById('init').innerText = `${val}`;
    for (let element of allOptions) {
      element.classList.add('list');
    }
  });
}
