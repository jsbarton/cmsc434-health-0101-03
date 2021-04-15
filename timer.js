var minutes= prompt("For how many minutes would you like to do this exercise?");
var seconds= prompt("For how many seconds would you like to do this exercise?");

let a = /\D/g;
let pass = true;

if (minutes.match(a) != null && seconds.match(a) !=null) {
  alert("Please only enter digits.")
  pass = false;
}

if (pass) {
const TIME_LIMIT = (minutes*60)+seconds;
const FULL_DASH_ARRAY = 189;
const COLOR_CODES = {
  info: {
    color: "green"
  }
};
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

document.getElementById("timer").innerHTML =
`<div class="base-timer">
  <svg class = "base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class = "base-timer__circle">
      <circle class = "base-timer__path-elapsed" cx="50" cy="57" r="30"/>
      <path
       id="base-timer-path-remaining"
       stroke-dasharray="189"
       class="base-timer__path-remaining"
       d="
         M 50, 57
         m -30, 0
         a 30,30 0 1,0 60,0
         a 30,30 0 1,0 -60,0
       "
     ></path>
    </g>
</svg>

<span id="base-timer-label" class="base-timer__label">
  ${formatTimeLeft(TIME_LIMIT)}
</span>
</div>
`;


function startTimer() {
  timerInterval = setInterval(() => {

    // The amount of time passed increments by one
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    setCircleDasharray();

    if (timeLeft < 0){
      alert("Time's up!");
      return;
    }

    document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);
  }, 1000);
}

startTimer();

function formatTimeLeft(time) {

  const minutes = Math.floor(time / 60);

  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
    // const rawTimeFraction = timeLeft / TIME_LIMIT;
    // return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    return timeLeft/ TIME_LIMIT;
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 189`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
} else {
  window.location.href = "exercises.html";
}
