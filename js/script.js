document.addEventListener("DOMContentLoaded", function () {
  // Ensures script runs after HTML is loaded.

  // --- BMI Calculator Logic (for index.html) ---
  const heightInput = document.getElementById("height"); // Height input field
  const weightInput = document.getElementById("weight"); // Weight input field
  const bmiResultDiv = document.getElementById("bmi-result"); // Div to display result
  const bmiValueSpan = document.getElementById("bmi-value"); // Span for BMI value
  const bmiInterpretationParagraph =
    document.getElementById("bmi-interpretation"); // Paragraph for interpretation

  // Global function to calculate BMI, called by the button's onclick event
  window.calculateBMI = function () {
    const height = parseFloat(heightInput.value); // Get height, convert to number
    const weight = parseFloat(weightInput.value); // Get weight, convert to number

    // Input validation: check for valid positive numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      bmiValueSpan.textContent = "Invalid Input";
      bmiInterpretationParagraph.textContent =
        "Please enter valid height and weight.";
      bmiResultDiv.classList.remove("hidden"); // Show error
      return; // Exit function
    }

    const bmi = weight / (height * height); // BMI calculation
    bmiValueSpan.textContent = bmi.toFixed(2); // Display BMI, 2 decimal places

    // Determine BMI interpretation based on standard categories
    let interpretation = "";
    if (bmi < 18.5) {
      interpretation = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      interpretation = "Healthy weight";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      interpretation = "Overweight";
    } else {
      interpretation = "Obese";
    }
    bmiInterpretationParagraph.textContent = interpretation;
    bmiResultDiv.classList.remove("hidden"); // Show result
  };

  // --- Symptoms Interactivity Logic (for disease pages) ---
  const symptomsList = document.getElementById("symptoms-list"); // Get symptoms list element
  const symptomDescription = document.getElementById("symptom-description"); // Get description display area

  // Select all list items (symptoms) if symptomsList exists, else an empty array
  const symptomItems = symptomsList ? symptomsList.querySelectorAll("li") : [];

  // Add click event listener to each symptom item
  symptomItems.forEach((item) => {
    item.addEventListener("click", function () {
      const description = this.getAttribute("data-description"); // Get description from data attribute
      symptomDescription.textContent = description; // Set description text
      symptomDescription.classList.remove("hidden"); // Make description visible
    });
  });
});
