document.addEventListener("DOMContentLoaded", function () {
  // This script runs only when malaria-data.html is loaded and HTML is ready.

  // --- Static Data for Malaria Charts ---
  const malariaCasesByYear = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Reported Malaria Cases",
        data: [150000, 135000, 120000, 110000, 95000], // Hypothetical cases
        backgroundColor: "rgba(0, 123, 255, 0.5)", // Blue with transparency
        borderColor: "rgba(0, 123, 255, 1)", // Solid blue border
        borderWidth: 1,
      },
    ],
  };

  const malariaPrevalenceByAge = {
    labels: ["0-5 Yrs", "6-15 Yrs", "16-30 Yrs", "31-50 Yrs", "51+ Yrs"],
    datasets: [
      {
        label: "Malaria Prevalence (%)",
        data: [35, 25, 15, 10, 5], // Hypothetical percentage
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

  // --- Chart.js Initialization Logic for Malaria Charts ---

  const malariaCasesCtx = document.getElementById("malariaCasesChart");
  const malariaPrevalenceCtx = document.getElementById(
    "malariaPrevalenceChart"
  );

  if (malariaCasesCtx) {
    new Chart(malariaCasesCtx, {
      type: "line", // Line chart for showing trends over time
      data: malariaCasesByYear,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Malaria Cases by Year (Hypothetical)",
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

  if (malariaPrevalenceCtx) {
    new Chart(malariaPrevalenceCtx, {
      type: "bar", // Bar chart for showing prevalence across age groups
      data: malariaPrevalenceByAge,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Malaria Prevalence by Age Group (Hypothetical)",
            font: { size: 16 },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.dataset.label + ": " + context.raw + "%";
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Prevalence (%)",
            },
            max: 40,
          },
          x: {
            title: {
              display: true,
              text: "Age Group",
            },
          },
        },
      },
    });
  }
});
