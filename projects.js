const contProj = document.querySelector('.js-projects-cont');
const runners = Array.from(contProj.querySelectorAll('.js-runner'));
let isHighlighted = false;

document.addEventListener('scroll', detectPos);

function detectPos() {

  if(isHighlighted) {
    document.removeEventListener('scroll', detectPos);
    return;
  }

  if(isVisible()) {
    isHighlighted = true;
    highlight();
  }
};

function highlight() {
  runners.forEach((run, i) => {
    setTimeout(() => {
      run.style.width = `${run.parentElement.dataset.perc}%`;
    }, Math.floor(i / 3) * 400);
  });
}

function isVisible() {
  const vprtHeight = document.documentElement.clientHeight;
  const coords = contProj.getBoundingClientRect();

  const cond1 = coords.top > 0 && coords.top < vprtHeight;
  const cond2 = coords.bottom > 0 && coords.bottom < vprtHeight;
  return cond1 || cond2;
}

detectPos();