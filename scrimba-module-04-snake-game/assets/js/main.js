// Grab DOM elements
const playground = document.querySelector("#playground");
const startBtn = document.querySelector("#start");
const score = document.querySelector("#score");

// Load audios
const soundStart = new Audio("./assets/sounds/game-start.wav");
const soundGameOver = new Audio("./assets/sounds/game-over.wav");
const soundEat = new Audio("./assets/sounds/apple-eaten.wav");

// Variables
const width = 15; // numbers of squares each row
const gridNums = width * width; // total squares
const speed = 0.9; // how speed increase each time snake eats apple

let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let appleIndex = 0; // appleIndex index in squares
let timerId = 0;
let appledEaten = 0;
let intervalTime = 500;

let headStatus = "right";

// Process
createGrid();
document.addEventListener("keydown", control);
startBtn.addEventListener("click", startGame);

// Functions

function startGame() {
	// stop the snake
	clearInterval(timerId);
	// remove snake
	currentSnake.forEach((index) => squares[index].classList.remove("snake"));
	currentSnake.forEach((index) =>
		squares[index].classList.remove("snake-head")
	);
	// remove apple
	squares[appleIndex].classList.remove("apple");
	// reset score
	score.textContent = 0;
	// reset inital values
	currentSnake = [2, 1, 0];
	direction = 1;
	appleIndex = 0; // appleIndex index in squares
	timerId = 0;
	appledEaten = 0;
	intervalTime = 500;
	// create snake
	currentSnake.forEach((index) => squares[index].classList.add("snake"));
	squares[currentSnake[0]].classList.add("snake-head");
	// create apple
	generateApples();
	// move snake
	timerId = setInterval(move, intervalTime);
	// play sound
	soundStart.play();
}

function createGrid() {
	for (let i = 0; i < gridNums; i++) {
		let square = document.createElement("div");
		square.classList.add("grid-item");
		squares.push(square);
		playground.appendChild(square);
	}
}

function move() {
	if (
		(currentSnake[0] + width >= gridNums && direction === width) || // if snake has hit bottom wall
		(currentSnake[0] % width === width - 1 && direction === 1) || // if snake has hit right wall
		(currentSnake[0] % width === 0 && direction === -1) || // if snake has hit left wall
		(currentSnake[0] < width && direction === -width) || // if snake has hit top wall
		squares[currentSnake[0] + direction].classList.contains("snake")
	) {
		soundGameOver.play();
		return clearInterval(timerId);
	}
	
	// remove last element from currentSanke array
	const tail = currentSnake.pop();
	// remove styling from last element
	squares[tail].classList.remove("snake");
	// add square in direction we are heading
	const head = currentSnake[0] + direction;
	currentSnake.unshift(head);
	// add styling so we can see it
	squares[head].classList.add("snake");
	squares[head].classList.add("snake-head");
	headStatus === "up"
		? squares[head].classList.add("snake-head--up")
		: headStatus === "right"
			? squares[head].classList.add("snake-head--right")
			: headStatus === "down"
				? squares[head].classList.add("snake-head--down")
				: headStatus === "left" && squares[head].classList.add("snake-head--left");
	
	// remove styling of previous square
	squares[head - direction].classList.remove("snake-head");
	squares[head - direction].classList.remove(
		"snake-head--up",
		"snake-head--right",
		"snake-head--down",
		"snake-head--left"
	);
	
	if (currentSnake[0] === appleIndex) {
		// if snake eats apple
		// remove current apple and generate new one
		squares[appleIndex].classList.remove("apple");
		generateApples();
		// increase snake's tail by one
		currentSnake.push(tail);
		// style new snake's tail
		squares[tail].classList.add("snake");
		// increment score & display on screen
		appledEaten++;
		score.textContent = appledEaten;
		// increase speed
		clearInterval(timerId);
		intervalTime *= speed;
		timerId = setInterval(move, intervalTime);
		// play sound
		soundEat.play();
	}
}

function control(e) {
	// 39 is right arrow
	// 38 is for the up arrow
	// 37 is for the left arrow
	// 40 is for the down arrow
	if (e.keyCode === 37) {
		direction = -1;
		headStatus = "left";
		squares[currentSnake[0]].classList.add("snake-head--left");
	} else if (e.keyCode === 38) {
		direction = -width;
		headStatus = "up";
		squares[currentSnake[0]].classList.add("snake-head--up");
	} else if (e.keyCode === 39) {
		direction = 1;
		headStatus = "right";
		squares[currentSnake[0]].classList.add("snake-head--right");
	} else if (e.keyCode === 40) {
		direction = width;
		headStatus = "down";
		squares[currentSnake[0]].classList.add("snake-head--down");
	}
}

function generateApples() {
	const randomAppleIndex = () =>
		Math.floor(Math.random() * (squares.length - 1));
	do {
		appleIndex = randomAppleIndex();
	} while (squares[appleIndex].classList.contains("snake"));
	squares[appleIndex].classList.add("apple");
}
