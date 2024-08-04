let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operator) {
        firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
    }
    operator = op;
    currentInput = '';
    display.value = '';
}

function calculate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return b;
    }
}

function calculateResult() {
    if (operator === '' || currentInput === '') return;
    const secondOperand = parseFloat(currentInput);
    const result = calculate(firstOperand, secondOperand, operator);
    display.value = result;
    currentInput = result;
    firstOperand = result;
    operator = '';
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = '';
    display.value = '';
}
