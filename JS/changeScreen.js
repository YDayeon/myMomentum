const buttons = document.querySelector('.buttons');
const main = document.querySelector('.main');
const screens = document.querySelectorAll('.screen');

const HIDDENCLASS = 'hidden';

function handleScreen(event) {
  // 해당 버튼을 클릭하면 해당 화면 등장
  [...screens].filter((x) => {
    if (x.id === event.target.id) {
      x.classList.remove(HIDDENCLASS);
    } else {
      x.classList.add(HIDDENCLASS);
    }
  });
}

buttons.addEventListener('click', handleScreen);
