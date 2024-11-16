Feature: Login form validation

@UC-1
Scenario: User tries to log in with empty credentials
    Given I open login page
    When I input username: "test123" and password: "testpassword"
    And I clear "username" input
    And I clear "password" input
    And I click on login button
    Then I should get an error message "Username is required"

@UC-2
Scenario: User tries to log in with an empty password
    Given I open login page
    When I input username: "test12" and password: "password"
    And I clear "password" input
    And I click on login button
    Then I should get an error message "Password is required"



@UC-3
Scenario: User should be able to login by passing correct username and password
    Given I open login page
    When I input username: "standard_user" and password: "secret_sauce"
    And I click on login button
    Then I should be redirected to inventory page
    And I expect the dashboard title "be equal to" "Swag Labs"


