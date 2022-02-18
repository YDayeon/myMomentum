function makeSame(t) {
  const two = t.toString().padStart(2, '00');
  return two;
}

// clock
const time = document.querySelector('#clock');

function now() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  time.innerHTML = `${makeSame(h)} : ${makeSame(m)} : ${makeSame(s)}`;
}
now();
setInterval(now, 1000);

// timer
const timer = document.querySelector('#timer span');
const btns = document.querySelector('.timer_btn');
let hours = 0;
let minutes = 0;
let seconds = 0;
let setTimer;

const myTimer = () => {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  timer.innerHTML = `${makeSame(hours)} : ${makeSame(minutes)} : ${makeSame(
    seconds
  )}`;
};

function handleTimer(e) {
  const click = e.target.id;
  if (click === 'start') {
    if (!setTimer) {
      setTimer = setInterval(myTimer, 1000);
    }
  } else if (click === 'stop') {
    clearInterval(setTimer);
    setTimer = null;
  } else if (click === 'reset') {
    // location.reload();
    hours = 0;
    minutes = 0;
    seconds = 0;
    timer.innerHTML = `${makeSame(hours)} : ${makeSame(minutes)} : ${makeSame(
      seconds
    )}`;
  }
}

btns.addEventListener('click', handleTimer);
