let slides = document.getElementsByClassName("carousel-item")
let prevBtn = document.getElementById("carousel-button-prev")
let nextBtn = document.getElementById("carousel-button-next")

const totalSlides = slides.length
let slideIndex = 0

prevBtn.addEventListener("click", moveToPrevSlide)
nextBtn.addEventListener("click", moveToNextSlide)

function moveToNextSlide() {
	
	/* - When click:
	 * - Hide all slides
	 * - Check: if the current slide is the last slide
	 * + true: index returns 0 (come back first slide)
	 * + false: index returns index++ (continue to next slide)
	 * - Show the next slide
	 */
	
	hideAllSlides()
	
	slideIndex === totalSlides - 1 ?
		slideIndex = 0 : slideIndex++
	slides[slideIndex].classList.remove("carousel-item-hidden")
	slides[slideIndex].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
	
	/* - When click:
	 * - Hide all slides
	 * - Check: if the current slide is the first slide
	 * + true: index returns totalSlides - 1 (come back last slide)
	 * + false: index returns index-- (continue to prev slide)
	 * - Show the prev slide
	 */
	
	hideAllSlides()
	
	slideIndex === 0 ?
		slideIndex = totalSlides - 1 : slideIndex--
	slides[slideIndex].classList.remove("carousel-item-hidden")
	slides[slideIndex].classList.add("carousel-item-visible")
}

function hideAllSlides() {
	for (const slide of slides) {
		slide.classList.remove("carousel-item-visible")
		slide.classList.add("carousel-item-hidden")
	}
}
