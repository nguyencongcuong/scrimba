
// VARIABLES
let myEmojis = []

// GRAB ELEMENTS
const emojiContainer = document.querySelector("#emojiContainer")
const emojiInput = document.querySelector("#emoji-input")
const pushBtn = document.querySelector("#push-btn")
const unShiftBtn = document.querySelector("#unshift-btn")
const popBtn = document.querySelector("#pop-btn")
const shiftBtn = document.querySelector("#shift-btn")

// MAIN
if (localStorage.getItem("emojis")) {
    myEmojis = JSON.parse(localStorage.getItem("emojis"))
    render(myEmojis)
}

pushBtn.addEventListener("click", () => {
    modifyEmojis("push", myEmojis)
})

popBtn.addEventListener("click", () => {
    modifyEmojis("pop", myEmojis)
})

unShiftBtn.addEventListener("click", () => {
    modifyEmojis("unshift", myEmojis)
})

shiftBtn.addEventListener("click", () => {
    modifyEmojis("shift", myEmojis)
})

// FUNCTIONS
function clearInput(inputEl) {
    inputEl.value = ""
}

function render(arr) {
    let emojis = ""
    for (let i = 0; i < arr.length; i++) {
        emojis += `<div class="emoji-wrapper"><span class="emoji">${arr[i]}</span></div>`
    }
    emojiContainer.innerHTML = emojis
}

function modifyEmojis(command, array) {
    if (command == "push" || command === "unshift") {
        if(emojiInput.value) {
            if (command === "push") {
                array.push(emojiInput.value)
            } else {
                array.unshift(emojiInput.value)
            }
            clearInput(emojiInput)
        }
    }
    if (command === "pop" || command === "shift") {
        if (command === "pop") {
            array.pop()
        } else {
            array.shift()
        }
    }

    saveEmojisToLocalStorage(array)
    render(array)
}

function saveEmojisToLocalStorage(array) {
    let arrayStr = JSON.stringify(array)
    localStorage.setItem("emojis", arrayStr)
}
function getStringFromLocalStorage(key) {
    let string = localStorage.getItem(key)
    return string
}
function parseStringArray(stringArray) {
    return JSON.parse(stringArray)
}