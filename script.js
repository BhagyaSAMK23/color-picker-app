const colorPicker = document.getElementById("colorPicker");
const colorHex = document.getElementById("colorHex");
const colorDisplay = document.getElementById("colorDisplay");

// Function to update the color display
function updateColor() {
    const selectedColor = colorPicker.value;
    colorHex.textContent = selectedColor;
    colorDisplay.style.backgroundColor = selectedColor;
}

// Event listener for color change
colorPicker.addEventListener("input", updateColor);

// Initialize the display with the default color
updateColor();
