const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countDownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

// set date input min with todays date
const today = new Date().toISOString().split('T')[0];
// console.log(today);

dateEl.setAttribute('min',today)

// take from input
function updateCountdown (e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownDate,countdownTitle);

    console.log(e);
}


// event listeners
// countdownForm.addEventListener('submit',updateCountdown);

countdownForm.addEventListener('submit', updateCountdown);