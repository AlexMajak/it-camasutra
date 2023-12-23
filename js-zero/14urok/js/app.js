function nameLog(idElement) {
var parameterEl = document.getElementById(idElement);
console.log(parameterEl.className);
console.log(parameterEl.value);
}

function getValue(idElement) {
        var parameterEl = document.getElementById(idElement);
       return parameterEl.value;
        }

        
// var firstNameId = "first-name";
// var firstNameEl = document.getElementById(firstNameId);
//console.log(firstNameEl.value);
var firstNameId = "first-name";
var lastNameId = "lastName";

nameLog(firstNameId);
nameLog(firstNameId);
nameLog(firstNameId);

nameLog(lastNameId);
nameLog(lastNameId);

var value = getValue(lastNameId);

window.alert(value);