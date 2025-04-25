// Function to handle weight calculations and display results
function calculateCalories() {
    const unit = document.getElementById("unit").value;
    const week1Weight = parseFloat(document.getElementById("week1Weight").value);
    const week2Weight = parseFloat(document.getElementById("week2Weight").value);
    const resultElement = document.getElementById("result");

    // Check if inputs are valid
    if (isNaN(week1Weight) || isNaN(week2Weight)) {
        resultElement.textContent = "Please enter valid weights for both weeks.";
        return;
    }

    // Calculate the weight difference
    let weightDifference = week2Weight - week1Weight;

    if (unit === "imperial") {
        // Convert lbs to kg (1 lb = 0.453592 kg)
        weightDifference *= 0.453592;
    }

    // Calculate the total calorie surplus or deficit
    let calorieDifference = weightDifference * 7700; // 7700 calories = 1kg of body weight
    let dailyCalorieDifference = calorieDifference / 14;

    // Check if it’s a surplus or deficit
    let surplusOrDeficit = dailyCalorieDifference > 0 ? "surplus" : "deficit";
    dailyCalorieDifference = Math.abs(dailyCalorieDifference).toFixed(0);

    // Display the result
    resultElement.textContent = `You were in a ${surplusOrDeficit} of ${dailyCalorieDifference} calories per day.`;
}

// Function to reset inputs when unit is changed
function resetInputs() {
    document.getElementById("week1Weight").value = '';
    document.getElementById("week2Weight").value = '';
    document.getElementById("result").textContent = '';
}
