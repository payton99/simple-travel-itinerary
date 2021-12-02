const button = document.getElementById('btn');

function updateText() {
    let inputValue = document.getElementById('add-travel').value;
    document.getElementById('text').innerHTML = inputValue;
}

button.addEventListener('click', updateText);


const date1 = document.getElementById('trip-start-date');
const date2 = document.getElementById('trip-end-date');

const time1 = document.getElementById('destination-arrival-time');
const time2 = document.getElementById('return-arrival-time');

let dateTime1 = '';
dateTime1 += date1.value;
dateTime1 += ' ' + time1.value;

let dateTime2 = '';
dateTime2 += date2.value;
dateTime2 += ' ' + time2.value;

let startDate = new Date(dateTime1);
let endDate = new Date(dateTime2);

// let timeDiff = endDate.getTime() - startDate.getTime();
// let dayDiff = timeDiff / (1000 * 3600 * 24);
let diffSeconds = Math.abs(endDate - startDate) / 1000;
const days = Math.floor(diffSeconds / 86400);
diffSeconds -= days * 86400

const hours = Math.floor(diffSeconds / 3600) % 24;
diffSeconds -= hours * 3600;

function addElement() {
    const newDiv = document.createElement('div');
    const newText = document.createTextNode(`${days} days, ${hours} hours`);
    newDiv.appendChild(newText);
    const currentDiv = document.getElementById('return-flight-body');
    document.body.insertBefore(newDiv, currentDiv.nextSibling);
}

document.body.onload = addElement;


const newInput = document.getElementById('add-input');
const activities = document.getElementById('activities-body');
let i = 0;

function add() {
    i = i + 1;
    const inputWrap = document.createElement('div');
    inputWrap.id = `inputWrap-${i}`;
    const addInput = document.createElement('input');
    addInput.setAttribute('type', 'text');
    inputWrap.appendChild(addInput);

    const removeInput = document.createElement('button');
    removeInput.innerHTML = 'Remove';
    removeInput.onclick = () => {
        activities.removeChild(inputWrap);
    }

    inputWrap.appendChild(removeInput);
    activities.appendChild(inputWrap);


}

newInput.addEventListener('click', add);
