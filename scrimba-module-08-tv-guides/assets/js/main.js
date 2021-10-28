// MAIN PROCESS
findShow("office")
	.then(data => console.log(data))
	.catch(err => console.log(`Lỗi ${err}`))

// FUNCTIONS
async function findShow(query) {
	const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons`)
	return response.json()
}
