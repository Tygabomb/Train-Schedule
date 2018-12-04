const secondHand = document.querySelector('.second-hand');

function setdate() {

const now = new Date();
const seconds = now.getSeconds();
const secondDegrees = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondDegrees}deg)`;

console.log(`%c color: red; ${seconds}`)
}

setInterval(setdate, 1000);