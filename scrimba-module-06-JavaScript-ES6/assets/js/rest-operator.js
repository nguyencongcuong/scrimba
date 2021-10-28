function add(...nums) {
	let total = 0
	for (const num of nums) {
		total += num
	}
	console.log(nums)
	return total
}

console.log(add(4, 5, 6, 8, 12))