Feature: User Login

  Scenario: Valid user login
    Given the user navigates to the login page
    When they enter valid credentials
    Then they should be redirected to the dashboard
