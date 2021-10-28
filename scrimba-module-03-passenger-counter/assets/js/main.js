let incrementBtn = document.getElementById("increment")
let decrementBtn = document.getElementById("decrement")
let saveBtn = document.getElementById("save")
let saveEl = document.getElementById("save-el")
let counterEl = document.getElementById("count-el")

let count = 0
counterEl.textContent = count

incrementBtn.addEventListener("click", function() {
  increment()
})

decrementBtn.addEventListener("click", function () {
  decrement()
})

saveBtn.addEventListener("click", function() {
  save()
})

// Functions
function increment() {
  count += 1
  counterEl.textContent = count
}

function decrement() {
  if (count !== 0) {
    count -= 1
  }
  counterEl.textContent = count
}

function save() {
  let currentCountStr = count + " - "
  saveEl.textContent += currentCountStr
  reset()
}

function reset() {
  count = 0
  counterEl.textContent = 0
}