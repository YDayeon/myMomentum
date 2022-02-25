'use strict';

const loginForm = document.querySelector('#loginForm');
const loginPage = document.querySelector('.login');
const homePage = document.querySelector('.home');
const myName = document.querySelector('.inputName');
const greeting = document.querySelector('.greeting');

const nowHour = new Date().getHours();

const USERNAME = 'username';
const HIDDEN = 'hidden';
function hidden() {
  loginPage.classList.add(HIDDEN);
  homePage.classList.remove(HIDDEN);
  if ((0 <= nowHour && nowHour <= 4) || (21 <= nowHour && nowHour <= 23)) {
    greeting.innerText = `Good Night, ${localStorage.getItem(USERNAME)}😴`;
  } else if (5 <= nowHour && nowHour <= 11) {
    greeting.innerText = `Good Morning, ${localStorage.getItem(USERNAME)}🥱`;
  } else if (12 <= nowHour && nowHour <= 17) {
    greeting.innerText = `Good afternoon, ${localStorage.getItem(USERNAME)}😎`;
  } else {
    greeting.innerText = `Good evening, ${localStorage.getItem(USERNAME)}😊`;
  }
}

function openMain(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME, myName.value);
  hidden();
}

if (localStorage.getItem(USERNAME)) {
  hidden();
} else {
  loginForm.addEventListener('submit', openMain);
}
