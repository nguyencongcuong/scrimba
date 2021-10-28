getBookCollection()
	.then(displayLibrary)
	.catch(err => console.log("Lỗi: " + err))

// FUNCTIONS
async function getBookCollection() {
	const res = await fetch("./books.json")
	return await res.json()
}

function renderLibrary(bookArray) {
	
	const renderBook = (book) => `
		<div class="book">
			<div class="book__spine"></div>
			<div class="book__footer"></div>
			<div class="book__cover">
				<h2 class="book__title">${book.title}</h2>
				<h3 class="book__author">${book.author}</h3>
				<a class="book__wiki" href="${book.wiki}">Wikipedia</a>
			</div>
		</div>`
	
	return `
		<div class="books">
			${bookArray.map(book => renderBook(book)).join("")}
		<div>
	`
}

function displayLibrary(bookArray) {
	let root = document.getElementById("root")
	root.innerHTML = renderLibrary(bookArray)
}
