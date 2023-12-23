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

        window.alert(firstNameEl.value);
        // window.alert(firstNameEl.className);
        window.alert(lastNameEl.value);
        // window.alert(lastNameEl.className);
        window.alert(adressEl.value);
        // window.alert(adressEl.className);
        // window.alert(selectEl.value);
        // window.alert(selectEl.className);
        //window.alert(selectEl.innerHTML);
        // window.alert(textareaEl.value);
        // window.alert(textareaEl.className);
        //window.alert(textareaEl.innerHTML);
        // window.alert(divEl.value);
        // window.alert(divEl.className);
        // window.alert(divEl.innerHTML);
        // window.alert(imgEl.value);
        // window.alert(imgEl.className);
        // window.alert(imgEl.src);
        // window.alert(imgEl.alt);

        firstNameEl.value = "Sasha";
        lastname.value = "Familia";


        // window.alert(lastNameEl.className);

        lastNameEl.className = "default-input error-input";

        imgEl.src = "https://sun3-17.userapi.com/s/v1/ig1/WkyY5jp6p89cdw2F_1ITIQCx2cBHF4hqRdBtkRSrd3rvoPIUv8_DfOli7WWxfkGLGmChgYO0.jpg?size=50x50&quality=96&crop=0,11,338,338&ava=1"

        imgEl.title = "I am avatar";

        lastNameEl.title = "Wrong last name";

        selectEl.value = "Moscau1";

        textareaEl.value = "i am hav not interrest";

        divEl.innerHTML = "<ul id='list'><li>1</li><li>2</li><li>5</li></ul>";
        var listId = "list";
        var numberList = document.getElementById(listId);
        window.alert(numberList.innerHTML);