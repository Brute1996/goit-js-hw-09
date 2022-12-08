const buttonStart = document.querySelector('button[data-start]')
const buttonStop = document.querySelector('button[data-stop]')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let randomizeBodyColorActivate = true;
let colorIntervalId = null;

buttonStart.addEventListener('click', () => {

    if (randomizeBodyColorActivate) {
            colorIntervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    }

    randomizeBodyColorActivate = false;
})

buttonStop.addEventListener('click', () => {

    clearInterval(colorIntervalId)
    document.body.style.backgroundColor = '';
    randomizeBodyColorActivate = true
})


