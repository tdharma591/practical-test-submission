import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Visit Amphora website
Given("I visit the Amphora website", () => {
  cy.visit("https://www.amphora.net");
  cy.url().should("include", "amphora.net");
});

// Click on each product in the Products dropdown
When("I click on each product in the Products dropdown", () => {
  const baseUrl = "https://amphora.net";

  const products = [
    { name: "Symphony CTRM", urlPart: "/product/symphony/" },
    { name: "Alchemy CTRM", urlPart: "/product/alchemy/" },
    { name: "VaR Module", urlPart: "/product/var-module/" },
    { name: "Trade confirmations manager", urlPart: "/product/trade-confirmations-manager/" },
    { name: "Freight manager", urlPart: "/product/freight-manager/" },
    { name: "Claims manager", urlPart: "/product/claims-manager/" },
    { name: "Symphony Credit", urlPart: "/product/symphony-credit/" },
  ];

  products.forEach((product) => {
    cy.visit(baseUrl);

    // Hover on the Products menu (make sure it's the parent that triggers dropdown)
    cy.get("li.menu-item a").contains("Products").parent().trigger("mouseover");

    // Now click the product link inside the submenu
    cy.contains("a", product.name).should("exist").click({ force: true });

    // Verify page loaded
    cy.url().should("include", product.urlPart);
    cy.get("h1, h2").should("contain.text", product.name);
  });
});

Then("I should see the correct product page for each", () => {
  cy.get("h1, h2").should("exist");
});

Given("I visit the newsletter sign-up page", () => {
  cy.visit("https://amphora.net/newsletter-sign-up/");
});

When("I submit the newsletter form with a valid email", () => {
  cy.get('iframe[src*="hubspot"]').then(($iframe) => {
    const $body = $iframe.contents().find("body");
    cy.wrap($body).within(() => {
      cy.get('input[type="email"]').type("dharmateja.test@example.com", { force: true });
      cy.get('input[type="submit"]').click({ force: true });
    });
  });
});

Then("I should see a confirmation message {string}", (message) => {
  cy.wait(4000); // Wait for success message to appear
  cy.get('iframe[src*="hubspot"]').then(($iframe) => {
    const $body = $iframe.contents().find("body");
    cy.wrap($body).within(() => {
      cy.contains(message).should("be.visible");
    });
  });
});
