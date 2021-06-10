const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countDownForm');
const dateEl = document.getElementById('date-picker');
const countdownEl = document.getElementById('countdown')
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElement = document.querySelectorAll('span');



let countdownTitle = '';
let countdownDate = '';
let countownValue = Date;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let countdownActive;

// set date input min with todays date
const today = new Date().toISOString().split('T')[0];
// console.log(today);

dateEl.setAttribute('min',today);

// populate countdown/complete UI
function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime();
    console.log(now);
    const distance = countownValue - now;
    console.log(distance);
    const days = Math.floor(distance/day);
    const hours = Math.floor((distance % day)/hour);
    const minutes = Math.floor((distance % hour)/minute);
    const seconds = Math.floor((distance % minute)/second);

    console.log(days,hours,minutes,seconds);

    // populating count down
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElement[0].textContent = `${days}`;
    timeElement[1].textContent = `${hours}`;
    timeElement[2].textContent = `${minutes}`;
    timeElement[3].textContent = `${seconds}`;

    // hide input
    inputContainer.hidden = true;
    countdownEl.hidden=false;
    },second);

}

// take from input
function updateCountdown (e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownDate,countdownTitle);

    console.log(e);
    // get num version of date
    if (countdownDate === '') {
        alert ('please enter the date')
    } 
    else {
        countownValue = new Date(countdownDate).getTime();
    console.log(countownValue);
    updateDOM();
    }
}

// reset all values

function reset() {
    countdownEl.hidden=true;
    inputContainer.hidden = false;
    clearInterval(countdownActive);
    // reset values
    countdownTitle = '' ;
    countdownDate = '' ;

}

// event listeners
// countdownForm.addEventListener('submit',updateCountdown);

countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click',reset)