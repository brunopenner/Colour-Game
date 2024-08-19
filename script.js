
function generateNumber() {
    let min = 0;
    let max = 255;
    let randomNumber = Math.floor(Math.random() * (max + 1));

    return randomNumber;
}

function addBgColour(square) {
    let rgb = 'rgb(' + generateNumber() + ', ' + generateNumber() + ', ' + generateNumber() + ')';
    square.style.backgroundColor=rgb;
}

const correctColour = 'RGB (' + generateNumber() + ', ' + generateNumber() + ', ' + generateNumber() + ')';
console.log('Correct Colour: ' + correctColour);
document.getElementById('correct-colour').textContent = correctColour;

const squareList = document.querySelectorAll(".colour-square");
console.log(squareList);

squareList.forEach(addBgColour);