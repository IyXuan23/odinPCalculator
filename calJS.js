function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(num1, num2, operator) {
    if (operator == 'add') {
        return add(num1, num2);
    }
    if (operator == 'subtract') {
        return subtract(num1, num2);
    }
    if (operator == 'multiply') {
        return multiply(num1, num2);
    }
    if (operator == 'divide') {
        return divide(num1, num2);
    }
}

var number1;
var number2;
var operator;
