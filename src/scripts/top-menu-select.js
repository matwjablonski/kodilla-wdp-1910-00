const allOptions = document.querySelectorAll('ul li:not(.select-first-element)');

document.getElementById('select-first-element').addEventListener('click', function () {
  for (let element of allOptions) {
    element.classList.remove('selected');
  }
});

for (let element2 of allOptions) {
  element2.addEventListener('click', function (e) {
    let action = 'toggle';
    e.target.classList[action]('selected');
    let val = e.target.innerText;
    document.getElementById('select-first-element').innerText = '';
    document.getElementById('select-first-element').innerText = `${val}`;
  });
}
