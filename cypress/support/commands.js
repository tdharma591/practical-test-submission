// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to handle timeouts gracefully
Cypress.Commands.add("waitForElement", (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should("be.visible");
});

// Custom command to check if an element exists
Cypress.Commands.add("elementExists", (selector) => {
  return cy.get("body").then(($body) => {
    return $body.find(selector).length > 0;
  });
});

// Custom command to log test steps
Cypress.Commands.add("logStep", (stepDescription) => {
  Cypress.log({
    name: "STEP",
    message: stepDescription,
    consoleProps: () => {
      return {
        description: stepDescription,
        timestamp: new Date().toISOString(),
      };
    },
  });

  cy.task("log", `STEP: ${stepDescription}`);
});

// Custom command to take named screenshots
Cypress.Commands.add("takeScreenshot", (name) => {
  const screenshotName = name || `screenshot-${Date.now()}`;
  cy.screenshot(screenshotName);
});
