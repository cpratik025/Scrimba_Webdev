let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")



function convertLength(inputValue) {
    lengthEl.innerHTML += `<p class="converted-value">${inputValue} meters = ${(inputValue * 3.28084).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.28084).toFixed(3)} meters</p>`
    volumeEl.innerHTML += `<p class="converted-value">${inputValue} liters = ${(inputValue * 0.264172).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264172).toFixed(3)} liters</p>`
    massEl.innerHTML += `<p class="converted-value" >${inputValue} kilograms = ${(inputValue * 2.20462).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.20462).toFixed(3)} kilograms</p>`
}

function clearValues() {
    lengthEl.innerHTML = `<h2 class="value-text">Length (Meter/Feet)</h2>`
    volumeEl.innerHTML = `<h2 class="value-text">Volume (Liters/Gallons)</h2>`
    massEl.innerHTML = `<h2 class="value-text">Mass (Kilograms/Pounds)</h2>`
}
convertBtn.addEventListener("click", function() {
    clearValues()
    convertLength(inputEl.value)
})