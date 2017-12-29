var statusDisplay = document.querySelector("#status");
var colorDisplay = document.querySelector("#colorDisplay");

var squares = document.querySelectorAll(".squares");
var numSquares = 6;

var header = document.querySelector("header");

var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

reset();

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor == winningColor) {
            statusDisplay.textContent = "CORRECT";
            for (square of squares) {
                square.style.visibility = "visible";
                square.style.backgroundColor = winningColor;
            }
            header.style.backgroundColor = winningColor;
            resetButton.textContent = "PLAY AGAIN?";
        } else {
            statusDisplay.textContent = "TRY AGAIN";
            this.style.visibility = "hidden";
        }
    });
}

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        if (this.textContent === "EASY") {
            numSquares = 3;
        } else {
            numSquares = 6;
        }

        reset();
    });
}

resetButton.addEventListener("click", reset);

function reset() {
    colors = getRandomColorArray(numSquares);
    winningColorIndex = Math.floor(Math.random() * numSquares);
    winningColor = colors[winningColorIndex];
    colorDisplay.textContent = winningColor;

    header.style.backgroundColor = "white";

    statusDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.visibility = "visible";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.visibility = "hidden";
        }
    }

    resetButton.textContent = "NEW COLORS";
}

function getRandomColorArray(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return ("rgb(" + r + ", " + g + ", " + b + ")");
}