const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-btn");
const timeElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//const today = new Date().toISOString().split("T")[0];
const temp = new Date();
temp.setMinutes(temp.getMinutes() - temp.getTimezoneOffset());
const today = temp.toISOString().split("T")[0];
dateEl.setAttribute("min", today);
console.log("today:", today);

function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  console.log(distance);

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);
  console.log(days, hours, minutes, seconds);

  countdownElTitle.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[1].textContent = `${hours}`;
  timeElements[2].textContent = `${minutes}`;
  timeElements[3].textContent = `${seconds}`;

  inputContainer.hidden = true;
  countdownEl.hidden = false;
}

function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
  console.log(new Date().getTimezoneOffset());

  const temp = new Date(countdownDate);
  temp.setMinutes(temp.getMinutes() + temp.getTimezoneOffset());
  countdownValue = temp.getTime();
  //countdownValue = new Date(countdownDate).getTime();

  console.log("countdown value: ", countdownValue);
  updateDOM();
}
countdownForm.addEventListener("submit", updateCountdown);
