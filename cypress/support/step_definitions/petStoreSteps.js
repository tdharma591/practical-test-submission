import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let petId;
let response; // Global to track the latest response

When("I send a POST request to create a pet", () => {
  const pet = {
    id: Date.now(),
    name: "Rex",
    category: { id: 1, name: "dog" },
    photoUrls: ["https://example.com/dog.jpg"],
    tags: [{ id: 1, name: "cute" }],
    status: "available",
  };
  petId = pet.id;

  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/pet",
    body: pet,
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    response = res;
  });
});

When("I send a PUT request to update the pet", () => {
  const updatedPet = {
    id: petId,
    name: "Max",
    category: { id: 1, name: "dog" },
    photoUrls: ["https://example.com/dog.jpg"],
    tags: [{ id: 1, name: "brave" }],
    status: "available",
  };

  cy.request({
    method: "PUT",
    url: "https://petstore.swagger.io/v2/pet",
    body: updatedPet,
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    response = res;
  });
});

When("I send a GET request to fetch the pet by ID", () => {
  cy.request({
    method: "GET",
    url: `https://petstore.swagger.io/v2/pet/${petId}`,
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    response = res;
  });
});

When("I send a DELETE request to remove the pet", () => {
  cy.request({
    method: "DELETE",
    url: `https://petstore.swagger.io/v2/pet/${petId}`,
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    response = res;
  });
});

Then("the response status should be {int}", (expectedStatusCode) => {
  expect(response.status).to.eq(expectedStatusCode);
});

Then("the response should contain the pet name {string}", (expectedName) => {
  expect(response.body.name).to.eq(expectedName);
});
