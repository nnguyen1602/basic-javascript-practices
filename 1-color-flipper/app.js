const color = [0,1,2,3,4,5,6,7,8,9,"A","A","C","D","E","F"];

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const hex = document.querySelector(".color-value");

btn.addEventListener('click', function() {
    let colorValue = '#';
    for(let i = 1; i <= 6;i++) {
        colorValue += color[getRandomValue()];
    }
    container.style.backgroundColor = colorValue; 
    hex.style.color = colorValue; 
    hex.textContent = colorValue; 

})

function getRandomValue() {
    return Math.floor(Math.random() * color.length);
}