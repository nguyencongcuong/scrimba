let searchInput = document.getElementById("searchInput")
let allNames = getNames()

searchInput.addEventListener("keyup", (e) => {
    let searchQuery = e.target.value.toLowerCase()
    let searchedItems = search(searchQuery, allNames)
    renderResult(searchedItems)
})

function getNames() {
    let allNamesEl = document.querySelectorAll(".name")
    let names = []
    for (let i = 0; i < allNamesEl.length; i++) {
        names.push(allNamesEl[i].textContent)
    }
    return names
}

function search(itemToSearch, library) {
    let searchedItems = []
    for (let i = 0; i < library.length; i++) {
        library[i].toLowerCase().includes(itemToSearch) && 
        searchedItems.push(library[i])
    }
    return searchedItems
}
function renderResult(searchedItems) {
    const results = document.getElementById("results")
    let list = ""
    for (let i = 0; i < searchedItems.length; i++) {
        list += `<li class="name">${searchedItems[i]}</li>`
    }
    results.innerHTML = list
}