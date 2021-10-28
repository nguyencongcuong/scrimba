// Spread Operator Array
let contacts = ["Mary", "Joel", "Danny"]
let personalFriends = ["David", ...contacts, "Lily"]

contacts.push("John")
console.log(personalFriends)


// Spread Operator Object
let person = {
	name: "Adam",
	age: 25,
	city: "Manchester"
}

let employee = {
	...person,
	salary: 50000,
	position: "Software Developer"
}