// Destructuring Objects cho phép tiếp cận các object keys một cách ngắn gọn, thay vì phải gọi object.key thường xuyên

const player = {
	name: 'Lebron James',
	club: 'LA Lakers',
	address: {
		city: 'Los Angeles'
	}
}

const {name, club, address: {city}} = player

console.log(`${name} plays for ${club} in ${city}`)