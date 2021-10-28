const newDeckBtn = document.querySelector("#new-deck-btn")
const drawBtn = document.querySelector("#draw-btn")
const card1 = document.querySelector("#card-1")
const card2 = document.querySelector("#card-2")
const remainCards = document.querySelector("#remain-cards")
const winnerCard = document.querySelector("#winner-card")
const computerScoreBoard = document.querySelector("#computer-score")
const playerScoreBoard = document.querySelector("#player-score")

let computerScore = 0
let playerScore = 0

let hasDeck = false;

// Defaults:
if (!hasDeck) {
	drawBtn.disabled = true
}

newDeckBtn.addEventListener("click", async () => {
	const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle")
	const data = await res.json()
	localStorage.setItem("deck_id", data.deck_id)
	hasDeck = true
	drawBtn.disabled = false
	resetGame()
})


drawBtn.addEventListener("click", async () => {
	let deck_id = localStorage.getItem("deck_id")
	const res = await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
	const data = await res.json()
	
	card1.innerHTML = `<img src=${data.cards[0].image} alt="card 1"/>`
	card2.innerHTML = `<img src=${data.cards[1].image} alt="card 2"/>`
	
	remainCards.textContent = data.remaining
	
	const winner = defineWinner(data.cards[0], data.cards[1])
	
	if (winner === data.cards[0]) {
		winnerCard.textContent = "Lượt này máy thắng"
		computerScore++
		computerScoreBoard.innerHTML = computerScore
	} else if (winner === data.cards[1]) {
		winnerCard.textContent = "Lượt này bạn thắng!"
		playerScore++
		playerScoreBoard.innerHTML = playerScore
	} else if (!winner) {
		winnerCard.textContent = "Lượt này hoà"
	}
	
	if (data.remaining === 0) {
		drawBtn.setAttribute("disabled", true)
		defineFinalWinner()
	}
	
})

// BUSINESS FUNCTIONS

function resetGame() {
	computerScore = 0
	computerScoreBoard.textContent = 0
	playerScore = 0
	playerScoreBoard.textContent = 0
	card1.innerHTML = ""
	card2.innerHTML = ""
	remainCards.textContent = ""
}

function defineFinalWinner() {
	if (computerScore === playerScore) {
		winnerCard.innerHTML = "Ván này hoà"
	} else if (computerScore > playerScore) {
		winnerCard.innerHTML = "Ván này máy thắng"
	} else {
		winnerCard.innerHTML = "Ván này bạn thắng"
	}
}

/**
 * DEFINE WHICH CARD IS THE WINNER
 * @return {object} - if there is a card with higher score (winner)
 * @return {boolean} - false if two cards have the same score
 * These values of cards are in order of rising score. Card with higher score wins.
 * "3", "4", "5", "6", "7", "8", "9",
 * "10", "JACK", "QUEEN", "KING", "ACE", "2"
 * Log which card wins (or "It's a tie!"
 * if they're the same) to the console
 * @param card1
 * @param card2
 */

function defineWinner(card1, card2) {
	
	const cardValues = {
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9,
		10: 10,
		JACK: 11,
		QUEEN: 12,
		KING: 13,
		ACE: 14,
		2: 15,
	}
	
	if (cardValues[card1.value] > cardValues[card2.value]) {
		console.log("Card 1 wins")
		return card1
	} else if (cardValues[card1.value] < cardValues[card2.value]) {
		console.log("Card 2 wins")
		return card2
	} else {
		console.log("It's a tie!")
		return false
	}
}


