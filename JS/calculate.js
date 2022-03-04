const calculator = document.querySelector('.container');
const inputValue = calculator.querySelectorAll('input');
const formula = document.querySelector('#formula');
const result = document.querySelector('#result');
let resultValue = '';
let stackArr = [];
let input = '';

const operatorMap = new Map();
operatorMap.set('×', 2);
operatorMap.set('÷', 2);
operatorMap.set('+', 1);
operatorMap.set('-', 1);

function backwardOperator() {
  let operatorStack = [];
  let backwardStack = [];
  let i = 0;
  while (i < stackArr.length) {
    let x = stackArr[i];
    if (x === '+' || x === '-' || x === '×' || x === '÷') {
      if (operatorStack.length === 0) {
        operatorStack.push(x);
        i++;
      } else if (
        operatorMap.get(operatorStack[operatorStack.length - 1]) >=
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
  calculateNumber(backwardOperatorStack);
}

function calculateNumber(backwardOperatorStack) {
  let numberStack = [];
  for (const x of backwardOperatorStack) {
    if (x === '+' || x === '-' || x === '×' || x === '÷') {
      const first = parseFloat(numberStack.pop());
      const second = parseFloat(numberStack.pop());
      if (x === '+') {
        numberStack.push(second + first);
      } else if (x === '-') {
        numberStack.push(second - first);
      } else if (x === '×') {
        numberStack.push(second * first);
      } else if (x === '÷') {
        numberStack.push(second / first);
      }
    } else {
      numberStack.push(x);
    }
  }
  result.innerHTML = numberStack[0];
}

function handleCalculator(event) {
  event.preventDefault();
  const inputID = event.target.id;
  const inputClass = event.target.classList[0];
  if (inputID === 'calculate') {
    // calculateAll(resultValue);
    stackArr.push(input);
    backwardOperator();
    input = '';
  } else if (inputID === 'C') {
    stackArr = [];
    resultValue = '';
    formula.innerHTML = resultValue;
    result.innerHTML = '';
    input = '';
  } else if (inputClass === 'num') {
    resultValue += inputID;
    input += inputID;
    formula.innerHTML = resultValue;
  } else if (inputClass === 'operation') {
    resultValue += inputID;
    stackArr.push(input, inputID);
    input = '';
    formula.innerHTML = resultValue;
  }
}

calculator.addEventListener('click', handleCalculator);
