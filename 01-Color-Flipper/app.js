const body = document.querySelector('.mainPart');
const simple = document.querySelector('#simple');
const hex = document.querySelector('#hex');
const backgroundColor = document.querySelector('.backgroundColor');

const simpleColors = ['GREEN', 'RED', 'RGBA(133,122,200)', '#F15025', '#FF00FF', '#FFF0F5', 'BLUE', 'ORANGE', 'RGBA(35, 112, 155)'];
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomNumber(colorArray) {
    return Math.floor(Math.random() * colorArray.length);
}

simple.addEventListener("click", () => {
    let randomColor =  simpleColors[getRandomNumber(simpleColors)];
    body.style.backgroundColor = randomColor;
    backgroundColor.innerHTML = `Background Color : ${randomColor}`
})

hex.addEventListener("click", () => {
    let hex = "#";
    for (let i = 0; i < 6; i++){
        hex += hexColors[getRandomNumber(hexColors)];
    }
    body.style.backgroundColor = hex;
    backgroundColor.innerHTML = `Background Color : ${hex}`
})