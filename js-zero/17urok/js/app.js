var answerEl = document.getElementById("answer");
var labelEl = document.getElementById("labelRes");
var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");


var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function getNumber1() {
    return Number(input1.value);
}

function getNumber2() {
    return Number(input2.value);
}

function makeOperation(operationCode) {
    var result;
    if (operationCode === "+") {
        result = getNumber1() + getNumber2();
    } else if (operationCode === "-") {
        result = getNumber1() - getNumber2();
    } else if (operationCode === "*") {
        result = getNumber1() * getNumber2();
    } else if (operationCode === "/") {
        result = getNumber1() / getNumber2();
    } else {
        result = "Operation is unkown";
    }
    return answerEl.value = result;
}

function onButtonPlusClick() {
    makeOperation("+");
}

function onButtonMinusClick() {

    makeOperation("-");
}

function onButtonMultiplyClick() {

    makeOperation("*");
}

function onButtonDevideClick() {

    makeOperation("/");
}


buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDevide.addEventListener("click", onButtonDevideClick);