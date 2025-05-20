# MediGuide Africa: Empowering Health Literacy and Access

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

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

In many regions across Africa, access to clear, reliable health information and a directory of local healthcare services remains a significant challenge. Misinformation, lack of awareness, and difficulty in locating appropriate care centers contribute to poor health outcomes. SAND Technologies is at the forefront of leveraging AI and data to solve grand challenges, including revolutionizing healthcare delivery, as evidenced by their work with the Rural Health Operating System (RHOS) serving over 1 million patients.

Inspired by SAND Technologies' mission to bridge the gap between current reality and a digital future through meaningful AI and data solutions, this "MediGuide Africa" project aims to contribute to improving health literacy and access to basic health resources. It serves as a proof-of-concept for how straightforward digital tools can empower individuals with crucial health knowledge and guide them towards available local support.

## 2. About the Project

**MediGuide Africa** is a web-based application designed to serve as a user-friendly information portal for common health metrics and prevalent diseases in Africa, coupled with a simulated directory of local healthcare centers. It provides a simple yet effective platform for users to calculate their Body Mass Index (BMI) and explore comprehensive, easy-to-understand information on Malaria, Diabetes, and Hypertension, alongside mock local resource listings.

This project demonstrates my foundational skills in front-end software engineering, my ability to handle user input, process data, and present complex information clearly, all while keeping a focus on real-world impact and user experience.

## 3. Features

* **Interactive Landing Page:**
    * **Body Mass Index (BMI) Calculator:** Allows users to input their height and weight to calculate their BMI, providing an instant numerical result and a basic interpretation (Underweight, Healthy, Overweight, Obese). This showcases basic data input handling and numerical processing.
    * **Disease Selection Navigation:** Clearly guides users to detailed pages for specific diseases (Malaria, Diabetes, Hypertension).
* **Detailed Disease Information Pages (Malaria, Diabetes, Hypertension):**
    * **"What is [Disease]?"** Concise, accessible explanations.
    * **Common Symptoms:** An interactive list where clicking on a symptom reveals a brief, clear description, enhancing user engagement and information retention.
    * **Prevention Methods:** Practical and actionable steps.
    * **Basic Management/What to Do:** Initial guidance and importance of professional medical advice.
    * **Myths vs. Facts:** Visually distinct sections to debunk common misconceptions, promoting accurate understanding.
* **Simulated Local Healthcare Resource Directory:**
    * For each disease, a mock-up list of local healthcare centers is provided, including their name, simulated services, and contact information (e.g., Address, Phone Number). This highlights the potential for connecting users to real-world support.
* **Intuitive Navigation:** Simple "Back to Home" links on disease pages ensure seamless user experience.
* **Clean and Responsive UI:**  Designed with CSS to be visually appealing and accessible across different screen sizes.

## 4. Technologies Used

* **HTML5:** Structured the entire content, providing semantic meaning and a clear hierarchy for the web application's various sections and pages.
* **CSS3:** Styled the application, focusing on readability, user experience, and visual consistency. Employed Flexbox for layout management to ensure responsiveness.
* **JavaScript (ES6+):** Implemented core interactive functionalities:
    * BMI calculation based on user input.
    * Dynamic display of symptom descriptions.
    * Basic client-side input validation.

## 5. Installation & Usage

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser to view this project.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[YourGitHubUsername]/MediGuide-Africa-Software-Engineering-Project.git
    ```
    (Replace `[YourGitHubUsername]` with your actual GitHub username.)
2.  **Navigate into the project directory:**
    ```bash
    cd MediGuide-Africa-Software-Engineering-Project
    ```

### Usage

1.  Open the `index.html` file in your preferred web browser.
2.  Use the BMI calculator on the landing page by entering height and weight.
3.  Click on the disease buttons (Malaria, Diabetes, Hypertension) to navigate to their respective information pages.
4.  On disease pages, click on symptoms to reveal their descriptions.

## 6. My Thought Process & Problem-Solving Approach

My approach to building MediGuide Africa was driven by a desire to create a practical, impactful application that aligns with SAND Technologies' emphasis on "meaningful AI" and solving "real business problems."

1.  **Problem Identification & Alignment:** I started by identifying a tangible problem: the need for accessible, reliable health information and local resource guidance in communities. This directly resonates with SAND Technologies' work in digital healthcare transformation and their goal to empower individuals.
2.  **Core Functionality Design:**
    * **BMI Calculator:** This was chosen to demonstrate basic data handling (user input, numerical processing) and immediate value feedback. I focused on robust input validation to ensure reliable calculations.
    * **Disease Information:** Selecting Malaria, Diabetes, and Hypertension provided a strong basis for showcasing a broad range of common health issues in the African context, reflecting their relevance to community health.
    * **Interactive Symptoms:** Instead of static lists, I opted for a clickable symptom display. This enhances user engagement and allows information to be consumed more efficiently, reflecting a user-centric design approach.
    * **Local Resources:** Even as a simulated directory, this feature highlights the potential for practical application – connecting knowledge with actionable steps for care.
3.  **Architectural Choices:** I opted for a multi-page HTML structure rather than a Single Page Application (SPA) framework for this graduate-level project. This choice allows for clear demonstration of HTML structuring, inter-page navigation, and separation of concerns while keeping the project scope manageable and easy to review. The integration of JavaScript for specific interactive elements (like BMI calculation and symptom descriptions) within this multi-page structure showcases targeted functionality enhancement.
4.  **Code Quality & Readability:** A significant focus was placed on writing clean, well-organized, and thoroughly commented code (in HTML, CSS, and JavaScript). This was a conscious decision to make my thought process transparent and demonstrate adherence to professional coding standards, which I believe is critical for collaborative environments like SAND Technologies. My aim was to write code that is not just functional, but also understandable and maintainable by others.
5.  **User Experience (UX):** From the intuitive navigation to the clear layout and color scheme, I prioritized creating a user-friendly interface. The distinction between "Myths" and "Facts" with clear color coding was designed to prevent misinformation effectively.

This project allowed me to reinforce my front-end development skills and apply them to a domain with significant social impact, which is a core motivator for me as a software engineer.

## 7. Outcomes & Impact

MediGuide Africa successfully delivers on its core objectives:

* **Empowers Health Literacy:** Provides clear, actionable information on critical health topics, helping users understand common diseases and promote preventative measures.
* **Demonstrates Foundational Software Engineering Skills:** Effectively showcases proficiency in HTML for structure, CSS for styling, and JavaScript for client-side interactivity and data processing.
* **Highlights Problem-Solving Capability:** The design and implementation directly address the challenge of information accessibility and resource guidance.
* **Reflects Impact-Oriented Development:** The project’s focus on healthcare aligns with SAND Technologies' mission to create real value and positive change through technology.

## 8. Future Enhancements & Recommendations for Improvement

As a continuous learner, I see several avenues for expanding and improving MediGuide Africa, demonstrating a growth mindset and forward-thinking approach:

* **Integration with Real APIs:** Incorporate real public health APIs (e.g., for local clinic data, real-time health statistics, or relevant news) to make the resource directory and information more dynamic.
* **User Authentication & Personalization:** Allow users to create profiles, track their BMI over time, set health reminders, or receive personalized health tips.
* **Advanced Data Visualization:** Utilize JavaScript libraries (e.g., Chart.js, D3.js) to create more sophisticated and interactive data visualizations for health trends or disease prevalence.
* **Location-Based Services:** Integrate geolocation APIs to provide truly local healthcare resources based on the user's current location.
* **Search Functionality:** Implement a search bar for diseases or symptoms to quickly find relevant information.
* **Mobile Responsiveness (Advanced):** While basic responsiveness is included, a more dedicated mobile-first design approach could be adopted for optimal experience on all devices.
* **Backend Integration:** Introduce a Node.js/Express.js backend (as per my familiarity) for handling user data storage (e.g., historical BMI records), managing dynamic content, or implementing more complex server-side logic.
* **Accessibility Enhancements:** Further optimize for users with disabilities (e.g., screen reader compatibility, keyboard navigation).

## 9. License

This project is licensed under the MIT License. See the `LICENSE` file (if you choose to add one separately) for more details. For a graduate application, simply stating it here is fine.

## 10. Contact

* **Lanre Lawal**
* Email: [lanrelawal555@gmail.com](mailto:lanrelawal555@gmail.com)
* LinkedIn: [www.linkedin.com/in/lanrelawal2002](www.linkedin.com/in/lanrelawal2002)

---

### Live Demo

[**Placeholder:** Insert your live demo URL here after deployment (e.g., GitHub Pages, Netlify)]

### Video Demo

[**Placeholder:** Insert your 2-minute video demo URL here after uploading to YouTube (or another platform)]

---