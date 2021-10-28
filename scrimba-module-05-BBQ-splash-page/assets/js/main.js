let emailCollector = document.getElementById("email-collector")

emailCollector.addEventListener("submit", (event) => {
	event.preventDefault()
	let ourFormData = new FormData(event.target)
	let userFirstName = ourFormData.get("firstName")
	let updatedHTMLContent = `
		<h2>Congratulations, ${userFirstName}!</h2>
		<p>You're on your way to become a BBQ Master</p>
		<small class="note">We'll never share your information without your permission.</small>
	`
	let mainContent = document.getElementById("main-content")
	mainContent.innerHTML = updatedHTMLContent
})