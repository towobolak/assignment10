
const dayss = document.getElementById("daysss");
const hourss = document.getElementById("hoursss");
const minutess = document.getElementById("minutesss");
const secondss = document.getElementById("secondsss"); 

const currentYear = new Date().getTime();

const countDownDate = new Date("March 30, 2024 23:59:59").getTime();

function updateCountdowntime() {
  const currentTime = new Date();
  const distance = countDownDate - currentTime;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dayss.innerHTML = days;
  hourss.innerHTML = hours;
  minutess.innerHTML = minutes;
  secondss.innerHTML = seconds;
}

setInterval(updateCountdowntime, 1000);
