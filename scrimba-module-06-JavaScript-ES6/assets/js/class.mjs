export class Animal {
	constructor(type, legs) {
		this.type = type
		this.legs = legs
	}
	
	get metaData() {
		return `Type: ${this.type}, Legs: ${this.legs}`
	}
	
	makeNoise(sound = "Loud Noises") {
		console.log(sound)
	}
}

export class Cat extends Animal {
	constructor(type, legs, tail) {
		super(type, legs);
		this.tail = tail;
	}
	
	makeNoise(sound = "meow") {
		console.log(sound)
	}
}

// see main.js