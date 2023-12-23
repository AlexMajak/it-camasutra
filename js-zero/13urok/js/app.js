
function alertDivValues() {
        console.log(divEl.innerHTML);
}

function alertValues(elementParameter) {
        //  console.log(elementParameter.value);
        //  console.log(elementParameter.className);
}

function getEl(id) {
        console.log("somebody wants element by");
        var el = document.getElementById(id);
        return el;
}


var firstNameId = "first-name";
var firstNameEl = getEl(firstNameId);
alertValues(firstNameEl);
//alertFirstNameValues();
// console.log(firstNameEl.value);
// console.log(firstNameEl.className);

var lastNameId = "lastname";
var lastNameEl = getEl(lastNameId);
alertValues(lastNameEl);

var adressId = "adress";
var adressEl = getEl(adressId)
alertValues(adressEl);

var selectId = "select-city";
var selectEl = getEl(selectId);
alertValues(selectEl);

var textareaId = "textarea";
var textareaEl = getEl(textareaId);
alertValues(textareaEl);

var divId = "divId";
var divEl = getEl(divId);
alertValues(divEl);

var imgId = "imgId";
var imgEl = getEl(imgId);


firstNameEl.value = "Sasha";
alertValues(firstNameEl);

lastNameEl.value = "Familia";
alertValues(lastNameEl);

lastNameEl.className = "default-input error-input";
alertValues(lastNameEl);

imgEl.src = "https://sun3-17.userapi.com/s/v1/ig1/WkyY5jp6p89cdw2F_1ITIQCx2cBHF4hqRdBtkRSrd3rvoPIUv8_DfOli7WWxfkGLGmChgYO0.jpg?size=50x50&quality=96&crop=0,11,338,338&ava=1"
imgEl.title = "I am avatar";

lastNameEl.title = "Wrong last name";
alertValues(lastNameEl);

selectEl.value = "Moscau1";
alertValues(selectEl);

textareaEl.value = "i am hav not interrest";

alertValues(textareaEl);

divEl.innerHTML = "<ul id='list'><li>1</li><li>2</li><li>5</li></ul>";
var listId = "list";
var numberList = getEl(listId);
alertDivValues();