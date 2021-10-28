/**
Challenge:

- Start building out the BoredBot Skeleton however you'd like.
    That will include:
    - A title for the app ("BoredBot" might be a good start 😉)
    - A placeholder element that will be populated with the random
      idea we get from the API
    - A button to click for triggering the GET request to the Bored API.
      (Don't worry about implementing the button quite yet)
 */

let title = document.getElementById("title")
let activity = document.getElementById("activity")
let btn = document.getElementById("btn")

// Fetch on click
btn.addEventListener("click", fetchActivity)

// FUNCTION
function fetchActivity() {
	fetch("https://apis.scrimba.com/bored/api/activity")
		.then(response => response.json())
		.then(data => {
			activity.innerHTML = data.activity
			title.innerHTML = "Happy Bot"
		})
		.catch(error => console.log(error))
}
