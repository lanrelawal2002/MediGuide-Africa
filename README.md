# MediGuide Africa: Empowering Health Literacy and Access

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Chart.js](https://img.shields.io/badge/chart.js-F45B5B.svg?style=for-the-badge&logo=chart.js&logoColor=white)

---

## Table of Contents
1.  [Background](#1-background)
2.  [About the Project](#2-about-the-project)
3.  [Features](#3-features)
4.  [Technologies Used](#4-technologies-used)
5.  [Installation & Usage](#5-installation--usage)
6.  [My Thought Process & Problem-Solving Approach](#6-my-thought-process--problem-solving-approach)
7.  [Outcomes & Impact](#7-outcomes--impact)
8.  [Future Enhancements & Recommendations for Improvement](#8-future-enhancements--recommendations-for-improvement)
9.  [License](#9-license)
10. [Contact](#10-contact)

---

## 1. Background

In many regions across Africa, clear, reliable health information and a directory of accessible local healthcare services remain significant challenges. Misinformation, lack of awareness, and difficulty in locating appropriate care centers contribute to poorer health outcomes. This "MediGuide Africa" project aims to contribute to improving health literacy and access to basic health resources.

Inspired by **SAND Technologies' mission to bridge the gap between current reality and a digital future through meaningful AI and data solutions**, particularly in transforming healthcare delivery, this project serves as a proof-of-concept for how straightforward digital tools can empower individuals with crucial health knowledge and guide them towards available local support.

## 2. About the Project

**MediGuide Africa** is a web-based application designed to serve as a user-friendly information and data portal for common health metrics and prevalent diseases in Africa, coupled with a simulated directory of local healthcare centers. It provides a simple yet effective platform for users to calculate their Body Mass Index (BMI), explore comprehensive, easy-to-understand information on Malaria, Diabetes, and Hypertension, and most importantly, visualize key epidemiological data related to these diseases using **Chart.js**.

This project demonstrates my foundational skills in front-end software engineering, my ability to handle user input, process static data, visualize complex information meaningfully, and structure a multi-layered web application. My focus throughout was on delivering a tool with real-world impact and a strong user experience.

## 3. Features

* **Interactive Landing Page (`index.html`):**
    * **Body Mass Index (BMI) Calculator:** Allows users to input their height and weight to calculate their BMI, providing an instant numerical result and a basic interpretation (Underweight, Healthy, Overweight, Obese). This showcases basic client-side data input handling and numerical processing.
    * **Disease Selection Navigation:** Clearly guides users to dedicated options pages for specific diseases (Malaria, Diabetes, Hypertension).
* **Multi-Layered Disease Exploration (for Malaria, Diabetes, Hypertension):**
    * Each disease (`malaria.html`, `diabetes.html`, `hypertension.html`) now serves as an **options hub**, offering three distinct paths:
        * **Detailed Information (`[disease]-info.html`):** Provides comprehensive textual content on the disease, including causes, prevention, management, and an **interactive symptom list** where clicking on a symptom reveals a brief description.
        * **Data Insights (`[disease]-data.html`):** Presents key epidemiological data related to the disease through **interactive charts powered by Chart.js**. This demonstrates the ability to process and visualize static health data effectively.
        * **Local Resources (`[disease]-resources.html`):** Features an **expanded simulated directory of local healthcare centers** offering support, now including prominent African cities where SAND Technologies has a presence (e.g., Abuja, Lagos, Nairobi, Accra, Cape Town).
* **Intuitive Navigation:** Clear 'Back to Options' and 'Back to Home' links ensure a seamless user experience across all pages.
* **Clean and Responsive UI:** Designed with CSS to be visually appealing and accessible across different screen sizes.

## 4. Technologies Used

* **HTML5:** Structured the entire multi-page application, providing semantic meaning and a clear hierarchy for various sections and sub-pages.
* **CSS3:** Styled the application, focusing on readability, user experience, and visual consistency across all 13 HTML files. Utilized Flexbox for layout management and ensured basic responsiveness.
* **JavaScript (ES6+):** Implemented core interactive functionalities:
    * Client-side **BMI calculation** and input validation.
    * Dynamic display of symptom descriptions.
    * Integration and configuration of **Chart.js** to visualize static health datasets (cases by year, prevalence by age group) for each disease, demonstrating advanced data handling and presentation.

## 5. Installation & Usage

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser (e.g., Chrome, Firefox, Edge) to view and interact with this application.

### Installation

1.  **Clone the repository:** Open your terminal or command prompt and run:
    ```bash
    git clone https://github.com/lanrelawal2002/MediGuide-Africa.git
    ```
   
2.  **Navigate into the project directory:**
    ```bash
    cd MediGuide-Africa
    ```

### Usage

1.  Open the `index.html` file directly in your web browser.
2.  On the landing page, experiment with the BMI calculator.
3.  Click on any disease button (Malaria, Diabetes, Hypertension) to go to its options page.
4.  From the options page, explore:
    * "Detailed Information" to read about the disease and interact with symptoms.
    * "Data Insights" to view interactive charts visualizing key health data.
    * "Local Resources" to see the simulated directory of healthcare centers.
5.  Use the "Back to..." links in the headers to navigate seamlessly.

## 6. My Thought Process & Problem-Solving Approach

My approach to building **MediGuide Africa** was driven by a desire to create a practical, impactful application that aligns with **SAND Technologies' emphasis on "meaningful AI" and solving "real business problems"** through data.

1.  **Problem Identification & Alignment:** I started by identifying a tangible problem: the need for accessible, reliable health information and local resource guidance in communities. This directly resonates with SAND Technologies' work in digital healthcare transformation and their goal to empower individuals.
2.  **Core Functionality & Iterative Design:**
    * **Initial Core:** The BMI calculator was chosen to demonstrate basic data handling (user input, numerical processing) and immediate value feedback, with robust input validation.
    * **Evolving Structure:** Initially, disease pages were flat. To deepen **data demonstration and UI complexity**, I iterated to a multi-layered structure. This allows users to choose between detailed textual information, **visual data insights**, and expanded resources, showcasing improved **UX design**.
    * **Data Visualization Focus:** My decision to explicitly embed and visualize static health data (cases by year, prevalence by age group) using **Chart.js** was crucial. This directly addresses SAND Technologies' appreciation for data analysis and presentation, demonstrating my ability to transform raw numbers into understandable insights. I prioritized this feature to showcase my **JavaScript proficiency** in data manipulation and visualization, a key skill for a data-driven software engineering role.
    * **Expanded Resources:** Including multiple African cities for simulated resources highlights a broader, pan-African perspective relevant to SAND Technologies' global reach and impact.
3.  **Architectural Choices:** I meticulously designed the multi-page HTML structure for clear **information architecture** and inter-page navigation. The modularization of JavaScript into specific chart files (`malaria-chart.js`, `diabetes-chart.js`, `hypertension-chart.js`) alongside the main `script.js` demonstrates a strong understanding of **code organization and maintainability**, which is critical for collaborative development environments.
4.  **Code Quality & Readability:** Throughout development, a significant focus was placed on writing clean, well-organized, and thoroughly commented code (in HTML, CSS, and JavaScript). This was a conscious decision to make my thought process transparent and demonstrate adherence to professional coding standards, ensuring the code is not just functional but also understandable and maintainable by others.
5.  **User Experience (UX):** From intuitive navigation and clear layout to distinct visual cues (e.g., color coding for Myths vs. Facts, chart interactivity), I prioritized creating a user-friendly interface that simplifies complex health information.

This project allowed me to reinforce and expand my **front-end development skills**, applying them to a domain with significant social impact, which is a core motivator for me as an aspiring software engineer.

## 7. Outcomes & Impact

**MediGuide Africa** successfully delivers on its core objectives, demonstrating key skills aligned with the **Software Engineering Graduate Trainee** role at SAND Technologies:

* **Empowers Health Literacy:** Provides clear, actionable information on critical health topics and combats misinformation, directly contributing to community well-being.
* **Demonstrates Advanced Data Handling & Visualization:** Effectively showcases the ability to process, organize, and visually represent static health data using Chart.js, transforming numbers into insightful trends and comparisons.
* **Highlights Strong Software Engineering Skills:** Evidences proficiency in **HTML for robust multi-page structure, CSS for clean and adaptable UI, and JavaScript for complex client-side interactivity and data manipulation.**
* **Reflects Problem-Solving Capability:** The design and implementation directly address the challenge of information accessibility and resource guidance in a user-friendly manner.
* **Aligns with Impact-Oriented Development:** The project’s focus on healthcare awareness and accessibility deeply aligns with SAND Technologies' mission to create real value and positive change through technology across Africa.

## 8. Future Enhancements & Recommendations for Improvement

As a continuous learner, I see several avenues for expanding and improving **MediGuide Africa**, demonstrating a growth mindset and forward-thinking approach for future development:

* **Integration with Real APIs:** Replace static datasets with dynamic data fetching from public health APIs (e.g., WHO, UNICEF health data APIs for more realistic data).
* **User Authentication & Personalization:** Implement features allowing users to create profiles, track their BMI history, set health reminders, or receive personalized health tips.
* **Location-Based Services:** Integrate geolocation APIs and mapping libraries (e.g., Google Maps API, Leaflet.js) to provide truly dynamic and location-specific healthcare resource directories.
* **Search Functionality:** Add a robust search bar for diseases, symptoms, or resources to enhance navigability.
* **Advanced Mobile Responsiveness:** Further optimize the layout and interactivity specifically for diverse mobile devices and screen sizes.
* **Backend Integration:** Introduce a Node.js/Express.js backend for managing larger datasets, user accounts, and potentially more complex server-side logic (e.g., storing user-submitted health questions).
* **Accessibility & Internationalization:** Further optimize for users with disabilities (e.g., screen reader compatibility) and consider adding multi-language support.

## 9. License

This project is licensed under the MIT License.

## 10. Contact

* **Lanre Lawal**
* Email: [lanrelawal2002@gmail.com](mailto:lanrelawal2002@gmail.com)
* LinkedIn: [www.linkedin.com/in/lanrelawal2002](http://www.linkedin.com/in/lanrelawal2002)
