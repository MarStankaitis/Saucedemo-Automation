Feature: Login

@UC-1
Scenario: Login page should show error message when login button is clicked and no credentials are provided
    Given I open login page
    When I login with <username> and <password>


@UC-3
Scenario: User should be able to to login by passing correct username and password
    Given I open login page
    When I login with "standard_user" and "secret_sauce"
    And I click on login button
    Then I should be redirected to inventory page
    And dashboard title should "be equal to" "Swag Labs"


