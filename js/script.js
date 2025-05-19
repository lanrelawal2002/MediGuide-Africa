document.addEventListener("DOMContentLoaded", function () {
  // --- BMI Calculator Logic ---
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const calculateButton = document.querySelector("#bmi-calculator button");
  const bmiResultDiv = document.getElementById("bmi-result");
  const bmiValueSpan = document.getElementById("bmi-value");
  const bmiInterpretationParagraph =
    document.getElementById("bmi-interpretation");

  window.calculateBMI = function () {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      bmiValueSpan.textContent = "Invalid Input";
      bmiInterpretationParagraph.textContent =
        "Please enter valid height and weight.";
      bmiResultDiv.classList.remove("hidden");
      return;
    }

    const bmi = weight / (height * height);
    bmiValueSpan.textContent = bmi.toFixed(2); // Display BMI with 2 decimal places

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
    bmiResultDiv.classList.remove("hidden");
  };

  // --- Malaria Symptoms Interactivity (Existing) ---
  const symptomsList = document.getElementById("symptoms-list");
  const symptomDescription = document.getElementById("symptom-description");
  const symptomItems = symptomsList ? symptomsList.querySelectorAll("li") : []; // Check if the element exists

  symptomItems.forEach((item) => {
    item.addEventListener("click", function () {
      const description = this.getAttribute("data-description");
      symptomDescription.textContent = description;
      symptomDescription.classList.remove("hidden");
    });
  });
});
