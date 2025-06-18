document.addEventListener("DOMContentLoaded", function () {
  // This script runs only when diabetes-data.html is loaded and HTML is ready.

  // --- Static Data for Diabetes Charts ---
  const diabetesDiagnosesByYear = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "New Diabetes Diagnoses",
        data: [7500, 8000, 8800, 9500, 10200], // Hypothetical diagnoses
        backgroundColor: "rgba(255, 159, 64, 0.6)", // Orange with transparency
        borderColor: "rgba(255, 159, 64, 1)", // Solid orange border
        borderWidth: 1,
      },
    ],
  };

  const diabetesPrevalenceByAge = {
    labels: ["0-18 Yrs", "19-35 Yrs", "36-55 Yrs", "56-70 Yrs", "70+ Yrs"],
    datasets: [
      {
        label: "Diabetes Prevalence (%)",
        data: [2, 8, 20, 30, 25], // Hypothetical percentage
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)", // Red
          "rgba(54, 162, 235, 0.7)", // Blue
          "rgba(255, 206, 86, 0.7)", // Yellow
          "rgba(75, 192, 192, 0.7)", // Green
          "rgba(153, 102, 255, 0.7)", // Purple
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // --- Chart.js Initialization Logic for Diabetes Charts ---

  const diabetesDiagnosesCtx = document.getElementById(
    "diabetesDiagnosesChart"
  );
  const diabetesPrevalenceCtx = document.getElementById(
    "diabetesPrevalenceChart"
  );

  if (diabetesDiagnosesCtx) {
    new Chart(diabetesDiagnosesCtx, {
      type: "bar", // Bar chart for new diagnoses over time
      data: diabetesDiagnosesByYear,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "New Diabetes Diagnoses by Year (Hypothetical)",
            font: { size: 16 },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return (
                  context.dataset.label +
                  ": " +
                  context.raw.toLocaleString() +
                  " diagnoses"
                );
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Number of Diagnoses",
            },
          },
          x: {
            title: {
              display: true,
              text: "Year",
            },
          },
        },
      },
    });
  }

  if (diabetesPrevalenceCtx) {
    new Chart(diabetesPrevalenceCtx, {
      type: "pie", // Pie chart for prevalence by age group
      data: diabetesPrevalenceByAge,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Diabetes Prevalence by Age Group (Hypothetical)",
            font: { size: 16 },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || "";
                if (label) {
                  label += ": ";
                }
                label += context.raw + "%";
                return label;
              },
            },
          },
        },
      },
    });
  }
});
