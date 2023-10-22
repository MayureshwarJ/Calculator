let displayValue = '';
let currentOperator = '';

function clearDisplay() {
    displayValue = '';
    currentOperator = '';
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    if (currentOperator !== '') {
        calculateResult();
    }
    displayValue += operator;
    currentOperator = operator;
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
    currentOperator = '';
}
