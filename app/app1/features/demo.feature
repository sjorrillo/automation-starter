@Demo
Feature: Github demo flow
  Demo flow

  Scenario: Github's home page
    When I am on page "https://github.com"
    Then I see "Built for developers"
    Then I click on "Sign in" option
    And The "/login" page is displayed
