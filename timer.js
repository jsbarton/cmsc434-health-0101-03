// Start with an initial value of 20 seconds
const TIME_LIMIT = 20;
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

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT


function startTimer() {
  timerInterval = setInterval(() => {

    // The amount of time passed increments by one
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    setCircleDasharray();

    if (timeLeft < 0){
      return;
    }

    // The time left label is updated
    document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);
  }, 1000);
}

startTimer();

function formatTimeLeft(time) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);

  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;

  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 189`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
