let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// Function to increment counter
function increment() {
  count += 1
  countEl.textContent = count
}

// Function which saves the count
function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}

// Function to show a warning while refreshing
window.onbeforeunload = function () {
  return "Info will be lost!";
}
