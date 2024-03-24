let currentInput = '0';

function appendToDisplay(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  document.getElementById('display').textContent = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  document.getElementById('display').textContent = currentInput;
}

function operate(operator) {
  currentInput += operator;
  document.getElementById('display').textContent = currentInput;
}

function changeBackground() {
    document.body.style.backgroundColor = '#fff'; 
  }