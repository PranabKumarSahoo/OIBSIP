"use strict";
function DateAndTime() {
    var dt = new Date();

    var Hours = dt.getHours();
    var Min = dt.getMinutes();
    var Sec = dt.getSeconds();
    // var MilliSec = dt.getMilliseconds();  + MilliSec + "MilliSec " (for milliseconds).

    //strings
    var days = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];

    //strings
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // var localTime = dt.getLocaleTimeString();
    // var localDate = dt.getLocaleDateString();

    if (Min < 10) {
        Min === "0" + Min;
    } //displays two digits even Min less than 10

    if (Sec < 10) {
        Sec === "0" + Sec;
    } //displays two digits even Sec less than 10

    var suffix = "AM"; //cunverting 24Hours to 12Hours with AM & PM suffix
    if (Hours >= 12) {
        suffix = "PM";
        Hours = Hours - 12;
    }
    if (Hours === 0) {
        Hours = 12;
    }

    // document.getElementById("time").innerHTML = localTime;

    document.getElementById("time").innerHTML =
        Hours + "Hours : " + Min + "Min : " + Sec + "Sec " + suffix + ".";
    document.getElementById("date").innerHTML =
        days[dt.getDay()] +
        ", " +
        dt.getDate() +
        " " +
        months[dt.getMonth()] +
        " " +
        dt.getFullYear();
}

new DateAndTime();
setInterval("DateAndTime()", 1000);


var add = document.getElementById("addToDo");
var input = document.getElementById("inputField");
var toDoContainer = document.getElementById("toDoContainer");

// for dark/light mode
var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

// input enter
add.addEventListener('click', addItem);
input.addEventListener('keypress', function (e) {
    if (e.key == "Enter") {
        addItem();
    }
});

function addItem(e) {
    const item_value = input.value;
    const item = document.createElement('div');
    item.classList.add('item');

    const item_content = document.createElement('div');
    item_content.classList.add('content');

    item.appendChild(item_content);

    const input_item = document.createElement('input');
    input_item.classList.add('text');
    input_item.type = 'text';
    input_item.value = item_value;
    input_item.setAttribute('readonly', 'readonly');
    input_item.addEventListener('dblclick', function () {
        input_item.style.textDecoration = "line-through";
    });
    item_content.appendChild(input_item);

    const item_action = document.createElement('div');
    item_action.classList.add('actions');

    // for edit button
    const edit_item = document.createElement('button');
    edit_item.classList.add('edit', 'btn', 'btn-success');
    edit_item.type = "button";
    edit_item.innerText = 'Edit';

    // for delete button
    const delete_item = document.createElement('button');
    delete_item.classList.add('delete', 'btn', 'btn-danger', 'fa', 'fa-trash');

    item_action.appendChild(edit_item);
    item_action.appendChild(delete_item);

    item.appendChild(item_action);

    toDoContainer.appendChild(item);

    input.value = '';
    // button function
    edit_item.addEventListener('click', (e) => {
        if (edit_item.innerText.toLowerCase() == "edit") {
            edit_item.innerText = "save";
            input_item.removeAttribute("readonly");
            input_item.focus();
        }
        else {
            edit_item.innerText = "Edit";
            input_item.setAttribute("readonly", "readonly");
        }
    });

    delete_item.addEventListener('click', (e) => {
        toDoContainer.removeChild(item);
    });
}