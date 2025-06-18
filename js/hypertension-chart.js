document.addEventListener("DOMContentLoaded", function () {
  // This script runs only when hypertension-data.html is loaded and HTML is ready.

  // --- Static Data for Hypertension Charts ---
  const hypertensionCasesByYear = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Detected Hypertension Cases",
        data: [12000, 13000, 14500, 16000, 17500], // Hypothetical cases
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Greenish-blue with transparency
        borderColor: "rgba(75, 192, 192, 1)", // Solid greenish-blue border
        borderWidth: 1,
      },
    ],
  };

  const hypertensionPrevalenceByAge = {
    labels: ["0-18 Yrs", "19-35 Yrs", "36-55 Yrs", "56-70 Yrs", "70+ Yrs"],
    datasets: [
      {
        label: "Hypertension Prevalence (%)",
        data: [1, 10, 25, 40, 35], // Hypothetical percentage
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

  // --- Chart.js Initialization Logic for Hypertension Charts ---

  const hypertensionCasesCtx = document.getElementById(
    "hypertensionCasesChart"
  );
  const hypertensionPrevalenceCtx = document.getElementById(
    "hypertensionPrevalenceChart"
  );

  if (hypertensionCasesCtx) {
    new Chart(hypertensionCasesCtx, {
      type: "line", // Line chart for cases over time
      data: hypertensionCasesByYear,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Hypertension Cases by Year (Hypothetical)",
            font: { size: 16 },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return (
                  context.dataset.label +
                  ": " +
                  context.raw.toLocaleString() +
                  " cases"
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
              text: "Number of Cases",
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

  if (hypertensionPrevalenceCtx) {
    new Chart(hypertensionPrevalenceCtx, {
      type: "doughnut", // Doughnut chart for prevalence by age group
      data: hypertensionPrevalenceByAge,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Hypertension Prevalence by Age Group (Hypothetical)",
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
