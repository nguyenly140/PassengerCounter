// document.getElementById("count-el").innerText = 5

// let count = 5
// count += 1
// console.log(count)

// Initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    // Option 1
    // document.getElementById("count-el").innerText = ++count

    // Option 2
    countEl.innerText = ++count

    

}