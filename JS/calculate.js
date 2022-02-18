const calculator = document.querySelector('.container');
const inputValue = calculator.querySelectorAll('input');
const result = document.querySelector('.result');
let resultValue = '';

function calculateAll(all) {
  console.log(all);
}

function handleCalculator(event) {
  event.preventDefault();
  const inputValue = event.target.id;
  if (event.target.id === 'calculate') {
    calculateAll(resultValue);
  } else if (inputValue === 'C') {
    resultValue = '';
    result.innerHTML = resultValue;
  } else {
    resultValue += inputValue;
    result.innerHTML = resultValue;
  }
}

calculator.addEventListener('click', handleCalculator);
