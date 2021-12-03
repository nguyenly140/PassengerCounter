// document.getElementById("count-el").innerText = 5

// let count = 5
// count += 1
// console.log(count)

// Initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    // document.getElementById("count-el").innerText = ++count
    count += 1
    countEl.innerText = count
}

// Create a function, save() which logs out the count when its called
function save() {
    let saveCount = " " + count + " - "
    saveEl.innerText += saveCount
    console.log(count)
}