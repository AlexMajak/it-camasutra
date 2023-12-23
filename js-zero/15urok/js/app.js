// function nameLog(idElement) {
// var parameterEl = document.getElementById(idElement);
// console.log(parameterEl.className);
// console.log(parameterEl.value);
// }

// function getValue(idElement) {
//         var parameterEl = document.getElementById(idElement);
//        return parameterEl.value;
//         }


// // var firstNameId = "first-name";
// // var firstNameEl = document.getElementById(firstNameId);
// //console.log(firstNameEl.value);
// var firstNameId = "first-name";
// var lastNameId = "lastName";

// nameLog(firstNameId);
// nameLog(firstNameId);
// nameLog(firstNameId);

// nameLog(lastNameId);
// nameLog(lastNameId);

// var value = getValue(lastNameId);

// window.alert(value);

function addErrorClass(elementId) {
        var element = document.getElementById(elementId);
        element.className = "error-input";
}

function addErrorClassToAllInput() {
        //debugger;
        addErrorClass("first-name");
        addErrorClass("lastName");
        addErrorClass("adress");
}
//window.setTimeout(addErrorClassToAllInput, 2000);
//addErrorClassToAllInput();
var sendButton = document.getElementById("send-button");
//sendButton.addEventListener("click", addErrorClassToAllInput);

function addErrorClassToLastName() {
        addErrorClass("lastName");
}

//sendButton.addEventListener("click", addErrorClassToLastName);

var firstNameEl = document.getElementById("first-name");

function onFirstNameKeyUp() {
        addErrorClass("first-name");
}

firstNameEl.addEventListener("keydown", onFirstNameKeyUp);

