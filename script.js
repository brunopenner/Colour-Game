function generateNumber(x = 255) {
    let max = x;
    let randomNumber = Math.floor(Math.random() * (max + 1));
    return randomNumber;
}

function addBgColour(square) {
    let rgb = 'rgb(' + generateNumber() + ', ' + generateNumber() + ', ' + generateNumber() + ')';
    square.style.backgroundColor = rgb;
}

function addWinnerColour(correctColour) {
    document.getElementById("hero").style.backgroundColor = correctColour;
    document.querySelectorAll(".colour-square").forEach(squareWinner => {
        console.log("Correct Colour: " + correctColour);
        squareWinner.style.backgroundColor = correctColour;
    });
}

function startGame() {
    const correctColour = 'rgb(' + generateNumber() + ', ' + generateNumber() + ', ' + generateNumber() + ')';
    console.log('Correct Colour: ' + correctColour);
    document.getElementById('correct-colour').textContent = correctColour;

    const squareList = document.querySelectorAll(".colour-square");
    console.log(squareList);

    squareList.forEach(addBgColour);
    let modifiedSquare = squareList[generateNumber(squareList.length - 1)];
    modifiedSquare.style.backgroundColor = correctColour;

    squareList.forEach(square => {
        square.addEventListener('click', () => {
            console.log(square.style.backgroundColor);
            if (square.style.backgroundColor === correctColour) {
                addWinnerColour(correctColour);
                console.log("Winner!");

                setTimeout(() => {
                    gamePlay = false;
                    handleGameOver();
                }, 1000);
            }
        });
    });
}

function handleGameOver() {
    if (!gamePlay) {
        document.getElementById("game-over").style.display = "block";
    }
}

let gamePlay = true;
if (gamePlay) {
    startGame();
} else {
    handleGameOver();
}