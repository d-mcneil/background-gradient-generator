let cssCode = document.getElementById('hexcolor');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
const body = document.querySelector('body');
const randomizeButton = document.getElementById('random');
const copyButton = document.getElementById('copy');

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    cssCode.textContent = `background: linear-gradient(to right, ${color1.value}, ${color2.value});`;
}

const generateRandomHex = () => Math.round(Math.random() * 255).toString(16);

function randomize() {
    let colorNumbers = [
        generateRandomHex(),
        generateRandomHex(),
        generateRandomHex(),
        generateRandomHex(),
        generateRandomHex(),
        generateRandomHex()
    ];
    for (var i = 0; i < colorNumbers.length; i++) {
        if (colorNumbers[i].length === 1) {
            colorNumbers[i] = `0${colorNumbers[i]}`;
        }
    }
    color1.value = `#${colorNumbers[0]}${colorNumbers[1]}${colorNumbers[2]}`;
    color2.value = `#${colorNumbers[3]}${colorNumbers[4]}${colorNumbers[5]}`;
    setGradient();
}

function copyCode() {
    navigator.clipboard.writeText(cssCode.textContent);
}

setGradient();
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randomizeButton.addEventListener('click', randomize);
copyButton.addEventListener('click', copyCode);
