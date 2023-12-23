var answerEl = document.getElementById("answer");
var labelEl = document.getElementById("labelRes");
var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");

// function inputEl(number) {
//     var input1 = document.getElementById("number1");
//     var input2 = document.getElementById("number2");
//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);
//     return number1, number2;
// }
function onButtonPlusClick() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");
    var number1 = Number(input1.value);
    var number2 = Number(input2.value)
    var summ = number1 + number2;
    console.log(summ);
    answerEl.value = summ;
}

function onButtonMinusClick() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");
    var number1 = Number(input1.value);
    var number2 = Number(input2.value)
    var minus = number1 - number2;
    // window.alert(minus);
    console.log(minus);
    answerEl.value = minus;
}

function onButtonMultiplyClick() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");
    var number1 = Number(input1.value);
    var number2 = Number(input2.value)
    var multiply = number1 * number2;
    // window.alert(multiply);
    console.log(multiply);
    answerEl.value = multiply;
}

function onButtonDevideClick() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");
    var number1 = Number(input1.value);
    var number2 = Number(input2.value)
    var devide = number1 / number2;
    // window.alert(devide);
    console.log(devide);
    answerEl.value = devide;
}

buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDevide.addEventListener("click", onButtonDevideClick);