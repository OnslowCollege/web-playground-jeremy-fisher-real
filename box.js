const sliderbox = document.getElementById(`box`)
const redSlider = document.getElementById(`redSlider`)
const greenSlider = document.getElementById(`greenSlider`)
const blueSlider = document.getElementById(`blueSlider`)

function changeColour() {
    sliderbox.style.backgroundColor = 
    `rgb(`+redSlider.value+`, `+greenSlider.value+`, `+blueSlider.value+`)`
}

redSlider.addEventListener("change", changeColour)
greenSlider.addEventListener("change", changeColour)
blueSlider.addEventListener("change", changeColour)