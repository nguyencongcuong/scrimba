/**
Challenge:

1. Google for "how to use fetch with json"
2. Should find a top result from MDN
3. MANUALLY copy over the fetch, but using the URL below 👇
    https://dog.ceo/api/breeds/image/random
 */

let dataEl = document.querySelector("#data")

fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => response.json())
.then((data) => {
	console.log(data)
	dataEl.setAttribute("src", data.message)
})
.catch((error) => console.log(error))


/**
Challenge:

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
 */

fetch("https://apis.scrimba.com/bored/api/activity")
.then(response => response.json())
.then(data => {
	let messageEl = document.querySelector("#message")
	messageEl.innerHTML = `<p>${data.activity}</p>`
	console.log(data)
})
.catch(error => console.log(error))
