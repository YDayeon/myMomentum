'use strict';

const loginForm = document.querySelector('#loginForm');
const loginPage = document.querySelector('.login');
const mainPage = document.querySelector('.main');
const myName = document.querySelector('.inputName');
const greeting = document.querySelector('.greeting');

// // go to Main page
// function openMain(event) {
//   event.preventDefault();
//   loginPage.classList.add('hidden');
//   greeting.innerText = `Have a good day ${myName.value}`;
//   mainPage.classList.remove('hidden');
// }

// loginForm.addEventListener('submit', openMain);

// change screen
const buttons = document.querySelector('.buttons');
const screen = document.querySelector('.screen');
function handleScreen(event) {
  const subject = event.target.id;
  if (subject === 'calculator') {
    screen.style.backgroundColor = 'red';
  } else if (subject === 'map') {
    screen.style.backgroundColor = 'orange';
  } else if (subject === 'weather') {
    screen.style.backgroundColor = 'green';
  } else if (subject === 'memo') {
    screen.style.backgroundColor = 'blue';
  }
}

buttons.addEventListener('click', handleScreen);
