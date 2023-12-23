var firstNameId = "first-name";
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = "lastname";
var lastNameEl = document.getElementById(lastNameId);
var adressId = "adress";
var adressEl = document.getElementById(adressId)
var selectId = "select-city";
var selectEl = document.getElementById(selectId);
var textareaId = "textarea";
var textareaEl = document.getElementById(textareaId);
var divId = "divId";
var divEl = document.getElementById(divId);
var imgId = "imgId";
var imgEl = document.getElementById(imgId);
//debugger;
//console.log(firstNameEl.value);
// console.log(firstNameEl.className);
//console.log(lastNameEl.value);
// console.log(lastNameEl.className);
//console.log(adressEl.value);
// console.log(adressEl.className);
// console.log(selectEl.value);
// console.log(selectEl.className);
//console.log(selectEl.innerHTML);
// console.log(textareaEl.value);
// console.log(textareaEl.className);
//console.log(textareaEl.innerHTML);
// console.log(divEl.value);
// console.log(divEl.className);
// console.log(divEl.innerHTML);
// console.log(imgEl.value);
// console.log(imgEl.className);
// console.log(imgEl.src);
// console.log(imgEl.alt);

function alertValues() {
        console.log(firstNameEl.value);
        console.log(lastNameEl.value);
        console.log(adressEl.value);
        console.log(selectEl.value);
}
alertValues();

firstNameEl.value = "Sasha";
lastname.value = "Familia";

lastNameEl.className = "default-input error-input";

imgEl.src = "https://sun3-17.userapi.com/s/v1/ig1/WkyY5jp6p89cdw2F_1ITIQCx2cBHF4hqRdBtkRSrd3rvoPIUv8_DfOli7WWxfkGLGmChgYO0.jpg?size=50x50&quality=96&crop=0,11,338,338&ava=1"

imgEl.title = "I am avatar";

alertValues();



lastNameEl.title = "Wrong last name";

selectEl.value = "Moscau1";

alertValues();

textareaEl.value = "i am hav not interrest";

divEl.innerHTML = "<ul id='list'><li>1</li><li>2</li><li>5</li></ul>";
var listId = "list";
var numberList = document.getElementById(listId);
console.log(numberList.innerHTML);