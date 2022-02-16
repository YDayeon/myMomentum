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
