var answerEl = document.getElementById("answer");
var labelEl = document.getElementById("labelRes");
var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");


var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

// function number1 {
//     return Number(input1.value);
// }

// function number2 {
//     return Number(input2.value);
// }

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var result;
    if (operationCode === "+") {
        result = number1 + number2;
    } else if (operationCode === "-") {
        result = number1 - number2;
    } else if (operationCode === "*") {
        result = number1 * number2;
    } else if (operationCode === "/") {
        result = number1 / number2;
    } else {
        result = "Operation is unkown";
    }
    return answerEl.value = result;
}

function onButtonClick(eventObject) {
    // debugger;
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

// function addCommonEventListener(i) {
//     operationArrayButtons[i].addEventListener("click", onButtonClick);
// }

var operationArrayButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];

for (var i = 0; i < operationArrayButtons.length; i++) {
    operationArrayButtons[i].addEventListener("click", onButtonClick);
}


// var arrayOfNumbers = [13, 24, 56, 100];
// var arrayOfStrings = ["Dima", "Sasha", "Anya", "Kolya"];