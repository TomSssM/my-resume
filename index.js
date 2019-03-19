const inputText = 'Ilya.getInfo();'.split('');
const input = document.querySelector('.code-field__input');
const ptr = document.querySelector('.js-pointer');
const main = document.querySelector('.main');
const cont = document.querySelector('.js-container');

main.style.opacity = '0'

setTimeout(function name() {
  if(!inputText.length) {
    showOutput();
    return;
  }
  if(inputText[0] === '.') {
    input.textContent += inputText.shift();
    setTimeout(name, 400);
    return;
  }
  input.textContent += inputText.shift();
  setTimeout(name, 100);
}, 400);

function showOutput() {
  setTimeout(() => {
    const hiddRows = Array.from(document.querySelectorAll('.code-field__row--hidden'));
    hiddRows.forEach(r => r.classList.remove('code-field__row--hidden'));
    const rows = document.querySelectorAll('.code-field__main');
    rows[rows.length - 1].append(ptr);
    document.querySelector('.js-writing').style.transition = '.3s 1s all ease-in-out';
    document.querySelector('.js-writing').classList.remove('code-writing--hidden');
    document.addEventListener('keydown', enterKey);
    setInterval(() => ptr.classList.toggle('code-field__pointer--hidden'), 490);
  }, 400);
}

function enterKey(e) {
  if(e.code === 'Enter') {
    fadeIt();
  }
}

document.body.style.overflow = 'hidden';

setTimeout(() => {
  if(!cont.classList.contains('code-container--effect-fade')) {
    fadeIt();
  }
}, 10000);

function fadeIt() {
  document.removeEventListener('keydown', enterKey);
  cont.classList.add('code-container--effect-fade');
  setTimeout(() => {
    cont.style.display = 'none';
    document.body.style.overflow = '';
    main.style.opacity = '';
  }, 100);
}