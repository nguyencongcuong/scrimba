// Variables
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

let player1Score = 0
let player2Score = 0
let player1Turn = true

// Default settings
resetBtn.style.display = "none"
player1Dice.classList.add("active")

// Main
resetBtn.addEventListener("click", resetGame)
rollBtn.addEventListener("click", renderGame)

function renderGame() {
    let currentDice
    let nextPlayer = "Player 2"

    if (player1Turn) {
        currentDice = randomDice()
        player1Score += currentDice
        player1Dice.textContent = currentDice
        player1Scoreboard.textContent = player1Score
        player1Dice.classList.toggle("active")
        player2Dice.classList.toggle("active")
    } else {
        currentDice = randomDice()
        player2Score += currentDice
        player2Dice.textContent = currentDice
        player2Scoreboard.textContent = player2Score
    }

    player1Turn = !player1Turn
    message.textContent = `${nextPlayer} Turn`

    compareScore()
}

function compareScore() {

    let dice1 = player1Dice.textContent
    let dice2 = player2Dice.textContent

    if (dice1 !== "-" && dice2 !== "-") {
        // Reset Dice
        rollBtn.setAttribute("disabled", "")
        rollBtn.style.opacity = "0.5"
        setTimeout(() => {
            resetDice();
            if (player1Score >= 10 || player2Score >= 10) {
                declareWinner()
            }
            rollBtn.removeAttribute("disabled", "");
            rollBtn.style.opacity = "1";
        }, 1000)
    }
}

function resetGame() {
    resetDice()
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = "0"
    player2Scoreboard.textContent = "0"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
}

function resetDice() {
    message.textContent = "Player 1 Turn"
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")
}

function declareWinner() {
    let declaration

    player1Score > player2Score ? (declaration = "Player 1 is Winner") :
    player1Score < player2Score ? (declaration = "Player 2 is Winner") :
    (declaration = "Draw!")

    message.textContent = declaration
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function randomDice() {
    return Math.floor(Math.random() * 6) + 1
}