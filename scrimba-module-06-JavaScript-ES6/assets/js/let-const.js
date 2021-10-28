let a = 3

if (true) {
	let a = 5
	console.log(a) // prints 5
}
console.log(a) // prints 3


// can be assigned only once:
const b = 55

// b = 44 // throws an error

const arr1 = []
arr1.push(5) // Still works
console.log(arr1)

const obj1 = {}
obj1.name = "Dylan" // Still works
console.log(obj1)