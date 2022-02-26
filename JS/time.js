'use strict';

// Dday
const ddayForm = document.querySelector('.add__Dday form');
const ddayInputYear = ddayForm.querySelector('#input_year');
const ddayInputMonth = ddayForm.querySelector('#input_month');
const ddayInputDay = ddayForm.querySelector('#input_day');

let date = new Date();
let currentDate = new Date(
  date.getFullYear,
  date.getMonth,
  date.getDate,
  date.getHours,
  date.getMinutes,
  date.getSeconds
);

function handleDday(event) {
  event.preventDefault();
  // let inputDate = new Date(
  //   ddayInputYear,
  //   ddayInputMonth,
  //   ddayInputDay,
  //   0,
  //   0,
  //   0
  // );

  console.log(inputDate, currentDate);
}
ddayForm.addEventListener('submit', handleDday);

clock;
const time = document.querySelector('#clock');

function makeSame(t) {
  const two = t.toString().padStart(2, '00');
  return two;
}

function nowTime() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  time.innerHTML = `${makeSame(h)} : ${makeSame(m)} : ${makeSame(s)}`;
}
nowTime();
setInterval(nowTime, 1000);

// timer
const timer = document.querySelector('#timer_time');
const btns = document.querySelector('.timer_btns');
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
