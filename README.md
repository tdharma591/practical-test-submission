# Amphora Practical Test Submission

This repository contains the practical test solution for Amphora, including automated UI and API tests using Cypress, Cucumber (BDD), and the Page Object Model (POM).

---

## 🔧 Tech Stack

- **Cypress** – End-to-end test automation
- **Cucumber (BDD)** – Gherkin syntax for test scenarios
- **Page Object Model (POM)** – Scalable and maintainable structure
- **Mochawesome** – Test result reporting

---

## 📁 Folder Structure

```
Amphora_Cypress_test/
├── cypress/
│   ├── e2e/
│   │   ├── features/            # Gherkin feature files
│   │   ├── step_definitions/    # Step definitions
│   │   └── pages/               # Page Object files
│   └── support/                 # Custom commands and test setup
├── cypress.config.js            # Cypress configuration
├── package.json                 # Project metadata & dependencies
└── README.md                    # You're here!
```

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/tdharma591/practical-test-submission.git
cd practical-test-submission
```

### 2. Install Dependencies

```bash
npm install cypress --save-dev
npm install @badeball/cypress-cucumber-preprocessor --save-dev
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
npm install cypress-mochawesome-reporter --save-dev
```

### 3. Run Cypress Test Runner (GUI)

```bash
npx cypress open
```

### 4. Run Tests in Headless Mode

```bash
npx cypress run
```

Test reports will be generated using **Mochawesome** (if configured).

---

## 📬 Submission

Submitted by: **Dharmateja**  
GitHub: [@tdharma591](https://github.com/tdharma591)

---

## ✅ Highlights

- ✅ Cypress + Cucumber (BDD)
- ✅ Page Object Model structure
- ✅ API + UI test coverage
- ✅ Test report generation using Mochawesome
- ✅ Clean and maintainable structure for real-world use

---

## 📄 License

This project is created for evaluation purposes only.
