let cards = []

let sum = 0

let message = ""

let hasBlackJack = false
let isAlive = false
let isStarted = false

let startEl = document.querySelector("#start-el")
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")

let player = {
  name: "Per",
  chips: 100,
  debit: 10,
  winDebit: function() {
    return this.chips += this.debit
  },
  loseDebit: function () {
    return this.chips -= this.debit
  }
}

playerEl.textContent = player.name + ": $" + player.chips
messageEl.textContent = "Want to play a rounded?"

/**
 ** MAIN FUNCTIONS
 *
 */

function renderGame() {

  renderCardEl()
  sumEl.textContent = "Sum: " + sum

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    
    isStarted = false
    hasBlackJack = true
    startEl.textContent = "New game"

    player.winDebit()
    playerEl.textContent = player.name + ": $" + player.chips

  } else {
    message = "You're out of the game!"

    isStarted = false
    isAlive = false
    startEl.textContent = "New game"

    player.loseDebit()
    playerEl.textContent = player.name + ": $" + player.chips

  }

  messageEl.textContent = message

}

function startGame() {

  if (!isStarted) {
    isAlive = true
    hasBlackJack = false
    let firstCard = randomCard()
    let secondCard = randomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
  }
  
  isStarted = true 

}

function newCard() {

  if (isAlive && !hasBlackJack) {
    let newCard = randomCard()
    sum += newCard

    cards.push(newCard)

    renderGame()
  }
}

function sumCards(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

function randomCard() {
  let value = Math.floor(Math.random() * 13) + 1
  if (value === 1) {
    return 11
  } else if (value === 11 || value === 12 || value === 13) {
    return 10
  } else {
    return value
  }
}

function renderCardEl() {
  cardEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
  }
}