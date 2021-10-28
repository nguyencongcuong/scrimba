/**
 * Challenge:
 *
 * Send a request to the JSON Placeholder API using `fetch`
 * URL: https://apis.scrimba.com/jsonplaceholder/posts
 *
 * Documentation: https://jsonplaceholder.typicode.com/
 *
 * Log the response data to the console
 */

let posts = document.getElementById("posts")
let postForm = document.getElementById("post-form")
let postTitleInput = document.getElementById("input-post-title")
let postBodyInput = document.getElementById("input-post-body")

fetchData()


postForm.addEventListener("submit", (e) => {
	
	// Get form data
	e.preventDefault()
	let DataFromForm = new FormData(postForm)
	let title = DataFromForm.get("post title")
	let body = DataFromForm.get("post body")
	const data = {title, body}
	
	// Reset form
	resetForm();
	
	/**
	 * Challenge: Send this off to the server!
	 *
	 * 1. BaseURL: https://apis.scrimba.com/jsonplaceholder/
	 * 2. Endpoint: /posts
	 * 3. method: ???
	 * 4. Request body: ??? (Remember to turn it into JSON)
	 * 5. Headers: ??? (Check the JSON Placeholder API docs or past casts for help)
	 */
	
	const options = {
		method: "POST",
		body: JSON.stringify({
			title: data.title,
			body: data.body
		}),
		headers: {
			"Content-Type": "application/json",
		}
	}
	
	fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			createPost(data)
		})
	
})

// FUNCTIONS
function fetchData() {
	fetch("https://apis.scrimba.com/jsonplaceholder/posts")
		.then(response => response.json())
		.then(data => {
			generatePosts(data, 5)
		})
		.catch(error => console.log(error))
}

function generatePosts(postArray, nums) {
	for (let i = 0; i < nums; i++) {
		createPost(postArray[i])
	}
}

function createPost(postObj) {
	let post = document.createElement("div")
	post.classList.add("post")
	post.innerHTML = `<h2>${postObj.title}</h2><p>${postObj.body}</p>`
	posts.insertAdjacentElement("afterbegin", post)
}
function resetForm() {
	postTitleInput.value = ""
	postBodyInput.value = ""
}
