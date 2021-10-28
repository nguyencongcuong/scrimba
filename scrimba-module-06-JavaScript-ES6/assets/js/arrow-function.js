function breakfastMenu() {
	return "I'm going to scrambled eggs for breakfast"
}

const lunchMenu = function () {
	return "I'm going to eat pizza for lunch"
}

const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner`

console.log(dinnerMenu("pizza"))
