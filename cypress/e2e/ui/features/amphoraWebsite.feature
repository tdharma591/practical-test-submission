Feature: Amphora Website UI Testing

  Scenario: Navigate through Products dropdown and verify each product page
    Given I visit the Amphora website
    When I click on each product in the Products dropdown
    Then I should see the correct product page for each

  @skip
  Scenario: Sign up for the newsletter under Resources
    Given I visit the newsletter sign-up page
    When I submit the newsletter form with a valid email
    Then I should see a confirmation message "Thank you for signing up for our newsletter"
