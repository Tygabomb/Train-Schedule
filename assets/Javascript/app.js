const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setdate() {

const now = new Date();

const seconds = now.getSeconds();
const secondDegrees = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondDegrees}deg)`;

const mins = now.getMinutes();
const minsDegrees = ((mins / 60) * 360) + 90;
minsHand.style.transform = `rotate(${minsDegrees}deg)`;

const hour = now.getHours();
const hourDegrees = ((mins / 12) * 360) + 90;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;

console.log(`%c color: red; ${seconds}`)
}

setInterval(setdate, 1000);