let count = 0;
let countEl = document.getElementById("count-el");

// Function to increment counter
function increment() {
  count = count + 1;
  countEl.innerText = count;
}

// Function which saves the count
function save() {
  console.log(count)
}
