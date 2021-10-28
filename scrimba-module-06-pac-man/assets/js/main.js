const WIDTH = 28 // 420 = 28 * 12

const grid = document.querySelector(".grid")
const scoreDisplay = document.querySelector("#score")
const messageDisplay = document.querySelector("#message")
const squares = []
let score = 0
/*
 * 0 - pac-dot
 * 1 - wall
 * 2 - ghost-lair
 * 3 - power-pellet
 * 4 - empty
 */
const layout = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
	1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
	1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
	1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
	1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

// MAIN

createBoard()

// Starting position of Pac-man
let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add("pacman")

// Controlling
document.addEventListener("keydown", control)

// Create Ghost
class Ghost {
	constructor(className, startIndex, speed) {
		this.className = className
		this.startIndex = startIndex
		this.speed = speed
		this.currentIndex = startIndex
		this.isScared = false
		this.timerID = NaN
	}
}

const ghosts = [
	new Ghost("blinky", 348, 500),
	new Ghost("pinky", 376, 1000),
	new Ghost("inky", 351, 450),
	new Ghost("clyde", 379, 300)
]

// Draw Ghosts
ghosts.forEach(ghost => {
	squares[ghost.startIndex].classList.add(ghost.className)
	squares[ghost.startIndex].classList.add("ghost")
})


// Move Ghost
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
	
	const directions = [1, -1, -WIDTH, WIDTH]
	let direction = directions[Math.floor(Math.random() * directions.length)]
	
	ghost.timerID = setInterval(() => {
		
		if (
			!squares[ghost.currentIndex + direction].classList.contains("wall") &&
			!squares[ghost.currentIndex + direction].classList.contains("ghost")
		) {
			// Remove any Ghost
			squares[ghost.currentIndex].classList.remove(ghost.className)
			squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost")
			// Add direction to the current index
			ghost.currentIndex += direction
			// Add ghost class
			squares[ghost.currentIndex].classList.add(ghost.className)
			squares[ghost.currentIndex].classList.add("ghost")
		} else {
			direction = directions[Math.floor(Math.random() * directions.length)]
		}
		
		// if the ghost is currently scared
		if (ghost.isScared) {
			squares[ghost.currentIndex].classList.add("scared-ghost")
		}
		
		// If the ghost is currently scared AND pacman is on it
		if (ghost.isScared && squares[ghost.currentIndex].classList.contains("pacman")) {
			// Remove classnames - ghost.className, 'ghost', 'scared-ghost'
			squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
			// Change ghosts currentIndex back to its startIndex
			ghost.currentIndex = ghost.startIndex
			// Add a score of 100
			score += 100
			scoreDisplay.innerText = score
			// Re-add classnames of ghost.className and 'ghost' to the ghosts new postion
			squares[ghost.currentIndex].add(ghost.className, "ghost")
		}
		
		// Check game over
		checkGameOver()
		
	}, ghost.speed)
	
}

// FUNCTIONS
function createBoard() {
	for (let i = 0; i < layout.length; i++) {
		// Create a square
		const square = document.createElement("div")
		// Put square in grid
		grid.appendChild(square)
		// Put square in squares array
		squares.push(square)
		// Define class for each square
		layout[i] === 0 ? squares[i].classList.add("pac-dot") :
			layout[i] === 1 ? squares[i].classList.add("wall") :
				layout[i] === 2 ? squares[i].classList.add("ghost-lair") :
					layout[i] === 3 && squares[i].classList.add("power-pellet")
	}
}

function control(e) {
	squares[pacmanCurrentIndex].classList.remove("pacman")
	switch (e.key) {
		case "ArrowUp":
			console.log("up")
			if (
				pacmanCurrentIndex > WIDTH &&
				!squares[pacmanCurrentIndex - WIDTH].classList.contains("wall") &&
				!squares[pacmanCurrentIndex - WIDTH].classList.contains("ghost-lair")
			) {
				pacmanCurrentIndex -= WIDTH
			}
			break;
		case "ArrowRight":
			console.log("right")
			if (
				pacmanCurrentIndex % WIDTH !== (WIDTH - 1) &&
				!squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
				!squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
			) {
				pacmanCurrentIndex += 1
				if (pacmanCurrentIndex === 391) {
					pacmanCurrentIndex = 364
				}
			}
			break;
		case "ArrowDown":
			console.log("down")
			if (
				pacmanCurrentIndex + WIDTH < WIDTH * WIDTH &&
				!squares[pacmanCurrentIndex + WIDTH].classList.contains("wall") &&
				!squares[pacmanCurrentIndex + WIDTH].classList.contains("ghost-lair")
			) {
				pacmanCurrentIndex += WIDTH
			}
			break;
		case "ArrowLeft":
			console.log("left")
			if (
				pacmanCurrentIndex % WIDTH !== 0 &&
				!squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
				!squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
			) {
				pacmanCurrentIndex -= 1
				if (pacmanCurrentIndex === 364) {
					pacmanCurrentIndex = 391
				}
				
			}
			break;
		default:
			break;
	}
	squares[pacmanCurrentIndex].classList.add("pacman")
	
	pacDotEaten()
	powerPelletEaten()
	checkGameOver()
	checkForWin()
}

function pacDotEaten() {
	if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
		score++
		scoreDisplay.innerText = score
		squares[pacmanCurrentIndex].classList.remove("pac-dot")
	}
}

function powerPelletEaten() {
	//if square pacman is in contains a power pellet
	if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
		
		// Remove class of Power Pellet
		squares[pacmanCurrentIndex].classList.remove("power-pellet")
		// Add a score of 10
		score += 10
		scoreDisplay.innerText = score
		// Change each of the four ghosts to isScared
		ghosts.forEach(ghost => {
			ghost.isScared = true
		})
		// Use setTimeout to unscare ghosts after 10 seconds
		setTimeout(unScareGhosts, 10000)
	}
}

function unScareGhosts() {
	ghosts.forEach((ghost) => {
		ghost.isScared = false
	})
}

function checkGameOver() {
	// if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost
	if (
		squares[pacmanCurrentIndex].classList.contains("ghost") &&
		!squares[pacmanCurrentIndex].classList.contains("scared-ghost")
	) {
		// for each ghost - we need to stop it moving
		ghosts.forEach(ghost => clearInterval(ghost.timerID))
		// remove Event Listener from our control function
		document.removeEventListener("keydown", control)
		// tell user the game is over
		messageDisplay.innerHTML = "Game is over"
	}
	
}


function checkForWin() {
	if (score === 100) {
		// Stop each ghost
		ghosts.forEach(ghost => clearInterval(ghost.timerID))
		// Remove event listener for control function
		document.removeEventListener("keydown", control)
		// Tell users they have won
		messageDisplay.innerHTML = "You have won!"
	}
}
