'use strict';

const loginForm = document.querySelector('#loginForm');
const loginPage = document.querySelector('.login');
const mainPage = document.querySelector('.main');
const myName = document.querySelector('.inputName');
const greeting = document.querySelector('.greeting');

const USERNAME = 'username';
const HIDDEN = 'hidden';
function hidden() {
  loginPage.classList.add(HIDDEN);
  greeting.innerText = `Have a good day ${localStorage.getItem(USERNAME)}`;
  mainPage.classList.remove(HIDDEN);
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
