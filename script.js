
//
function generateNumber(x=255) {
    let max = x;
    let randomNumber = Math.floor(Math.random() * (max + 1));

    return randomNumber;
}

function addBgColour(square) {
    let rgb = 'rgb(' + generateNumber() + ', ' + generateNumber() + ', ' + generateNumber() + ')';
    square.style.backgroundColor=rgb;
}

function addWinnerColour() {
    document.getElementById("hero").style.backgroundColor = correctColour
    document.querySelectorAll(".colour-square").forEach(squareWinner => {
        console.log("Correct Colour: " + correctColour)
        squareWinner.style.backgroundColor = correctColour;
    })
}

let gamePlay = true;
const correctColour = 'rgb(' + generateNumber() + ', ' + generateNumber() + ', ' + generateNumber() + ')';
if(gamePlay) {
    console.log('Correct Colour: ' + correctColour);
    document.getElementById('correct-colour').textContent = correctColour;

    const squareList = document.querySelectorAll(".colour-square");
    console.log(squareList);

    squareList.forEach(addBgColour);
    let modifiedSquare = squareList[generateNumber(5)].style.backgroundColor= correctColour;

    squareList.forEach(square => {
        square.addEventListener('click', () =>  {
            console.log(square.style.backgroundColor);
            if(square.style.backgroundColor == correctColour) {
                addWinnerColour();
                console.log("Winner!");
            }
        })
    })
}

