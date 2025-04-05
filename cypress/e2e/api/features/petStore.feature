Feature: Pet Store API Testing

  Scenario: Create a new pet
    When I send a POST request to create a pet
    Then the response status should be 200
    And the response should contain the pet name "Rex"

  Scenario: Update an existing pet
    When I send a PUT request to update the pet
    Then the response status should be 200
    And the response should contain the pet name "Max"

  Scenario: Get pet by ID
    When I send a GET request to fetch the pet by ID
    Then the response status should be 200
    And the response should contain the pet name "Max"

  Scenario: Delete a pet
    When I send a DELETE request to remove the pet
    Then the response status should be 200