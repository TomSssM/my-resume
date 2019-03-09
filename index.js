const inputText = 'Ilya.getInfo();'.split('');
const input = document.querySelector('.code-field__input');
const ptr = document.querySelector('.js-pointer');

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
    document.querySelector('.js-writing').classList.remove('code-writing--hidden');
    document.addEventListener('keydown', enterKey);
    setInterval(() => ptr.classList.toggle('code-field__pointer--hidden'), 490);
  }, 400);
}

function enterKey(e) {
  if(e.code === 'Enter') {
    document.removeEventListener('keydown', enterKey);
    const cont = document.querySelector('.js-container');
    cont.classList.add('code-container--effect-fade');
    setTimeout(() => {
      cont.style.display = 'none';
      document.body.style.overflow = '';
    }, 100);
  }
}

document.body.style.overflow = 'hidden';