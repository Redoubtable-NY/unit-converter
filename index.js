const meter = 3.281
// 3.281 feet
const liter = .264
// .264 gallons
const kilogram = 2.204 
// 2.204 pounds
const textEntry = document.getElementById("text-entry")
const ctaButton = document.getElementById("cta-button")
const conversionOne = document.getElementById("conversion-one")
const conversionTwo =  document.getElementById("conversion-two")
const conversionThree = document.getElementById("conversion-three")

ctaButton.addEventListener("click", function() {
        let inputValue = textEntry.value
        conversionOne.innerText = `${inputValue} meters = ${(inputValue*meter).toFixed(3)} feet | ${inputValue} feet = ${(inputValue/meter).toFixed(3)} meters`
        conversionTwo.innerText = `${inputValue} liters = ${(inputValue*liter).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue/liter).toFixed(3)} liters`
        conversionThree.innerText = `${inputValue} kilos = ${(inputValue*kilogram).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue/kilogram).toFixed(3)} kilos` 
    }
)