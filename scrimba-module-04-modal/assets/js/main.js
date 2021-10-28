const openModal = document.getElementById("open-modal")
const closeModal = document.getElementById("close-modal")
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal")

openModal.addEventListener("click", () => {
    overlay.classList.remove("hidden")
})

closeModal.addEventListener("click", () => {
    overlay.classList.add("hidden")
})