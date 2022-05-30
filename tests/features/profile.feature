  Feature: Logout from bookstore profile

  Scenario Outline: As a user, I logout from profile
    Given I am on the profile page
    When I click on the logout button
    Then I should redirect to the login page
