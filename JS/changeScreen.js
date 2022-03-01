const buttons = document.querySelector('.buttons');
const clickButton = document.querySelector('.clicked');
const screens = document.querySelectorAll('.screen');

let preButton = clickButton;
const HIDDENCLASS = 'hidden';

function handleScreen(event) {
  // 해당 버튼을 클릭하면 해당 화면 등장
  [...screens].filter((x) => {
    if (x.id === event.target.id) {
      x.classList.remove(HIDDENCLASS);
      preButton.classList.remove('clicked');
      preButton = event.path[1];
      event.path[1].classList.add('clicked');
    } else {
      x.classList.add(HIDDENCLASS);
    }
  });
}

buttons.addEventListener('click', handleScreen);
