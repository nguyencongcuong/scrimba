// Irritate through string
let incomes = [62000, 67000, 75000]
let total = 0
for (const income of incomes) {
	total += income
}
console.log(total)

// Irritate through string
let message = "Cuong is learning to code"
for (const char of message) {
	console.log(char)
}

// Challenge - For of Loop
// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
	{name: "John", city: "New York"},
	{name: "Peter", city: "Paris"},
	{name: "Kate", city: "Sidney"}
]

for (const student of students) {
	console.log(`${student.name} lives in ${student.city}`)
}