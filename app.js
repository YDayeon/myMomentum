const loginForm = document.querySelector('#loginForm');
const loginPage = document.querySelector('.login');
const mainPage = document.querySelector('.main');
const myName = document.querySelector('.inputName');
const greeting = document.querySelector('.greeting');

function openMain(event) {
  event.preventDefault();
  loginPage.classList.add('hidden');
  greeting.innerText = `Have a good day ${myName.value}`;
  mainPage.classList.remove('hidden');
}

loginForm.addEventListener('submit', openMain);
