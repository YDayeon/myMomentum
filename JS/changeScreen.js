const buttons = document.querySelector('.buttons');
const screen = document.querySelector('.screens');
const screens = document.querySelectorAll('.screen');

const HIDDENCLASS = 'hidden';
[...screens].map((x) => x.classList.add(HIDDENCLASS));
const idObject = new Map();

function handleScreen(event) {
  const subject = event.target.id;
  // 해당 버튼을 클릭하면 해당 화면 등장
}

buttons.addEventListener('click', handleScreen);
