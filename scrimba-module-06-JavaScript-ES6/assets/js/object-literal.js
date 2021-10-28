function addressMaker(city, state) {
	
	// const newAddress = {newCity: city, newState: state}
	
	// Object Literal
	const newAddress = {city, state}
	console.log(newAddress)
}

addressMaker('Austin', 'Texas')