const launchDate = new Date('December 14, 2022 12:30:03')
console.log(launchDate);
const dayNumber = document.getElementsByClassName("days")[0];
const hourNumber = document.getElementsByClassName("hours")[0];
const minutesNumber = document.getElementsByClassName("minutes")[0];
const secondsNumber = document.getElementsByClassName("seconds")[0];

UpdateTime();
setInterval(function() {
  UpdateTime();
}, 1000)

function UpdateTime() {
  let date = new Date();
  let diffTime = launchDate - date;
  let days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let hours = Math.ceil(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.ceil(diffTime % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.ceil(diffTime % (1000 * 60) / (1000));

  dayNumber.innerHTML = days;
  hourNumber.innerHTML = hours;
  minutesNumber.innerHTML = minutes;
  secondsNumber.innerHTML = seconds;
  secondsNumber.
}
