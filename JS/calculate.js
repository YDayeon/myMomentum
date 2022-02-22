const calculator = document.querySelector('.container');
const inputValue = calculator.querySelectorAll('input');
const result = document.querySelector('.result');
let resultValue = '';
let stackArr = [];
let input = '';

const operatorMap = new Map();
operatorMap.set('×', 0);
operatorMap.set('÷', 0);
operatorMap.set('+', 1);
operatorMap.set('-', 1);

function backwardOperator() {
  let operatorStack = [];
  let backwardStack = [];
  let i = 0;
  while (i < stackArr.length) {
    let x = stackArr[i];
    if (x === '+' || x === '-' || x === '×' || x === '÷') {
      if (operatorStack.length <= 1) {
        operatorStack.push(x);
        i++;
      } else if (
        operatorMap.get(operatorStack[operatorStack.length - 1]) <
        operatorMap.get(x)
      ) {
        backwardStack.push(operatorStack.pop());
      } else {
        operatorStack.push(x);
        i++;
      }
    } else {
      backwardStack.push(x);
      i++;
    }
  }
  const backwardOperatorStack = backwardStack.concat(operatorStack.reverse());
  console.log(backwardOperatorStack);
}

function calculateAll(all) {
  console.log(all);
}

function handleCalculator(event) {
  event.preventDefault();
  const inputID = event.target.id;
  const inputClass = event.target.classList[0];
  if (inputID === 'calculate') {
    calculateAll(resultValue);
    stackArr.push(input);
    backwardOperator();
  } else if (inputID === 'C') {
    stackArr = [];
    resultValue = '';
    result.innerHTML = resultValue;
  } else if (inputClass === 'num') {
    resultValue += inputID;
    input += inputID;
    result.innerHTML = resultValue;
  } else if (inputClass === 'operation') {
    resultValue += inputID;
    stackArr.push(input, inputID);
    input = '';
    result.innerHTML = resultValue;
  }
}

calculator.addEventListener('click', handleCalculator);
