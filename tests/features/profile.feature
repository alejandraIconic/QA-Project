  Feature: Logout from bookstore profile

  Scenario Outline: As a user, I logout from profile
    Given I am on the login page
    When I login with <userName> and <password>
    When I click on the logout button
    Then I should redirect to the login page

    Examples:
      | userName | password      |
      | ale      | @Password2021 |

  # Scenario Outline: As a user, I want to search an exiting book in my profile
  #   Given I am a logged user on my profile page
  #   When I type in the search box a existing <titleLabel>
  #   Then I should to see all the books that match with this text
  #     | titleLabel | 
  #     | Git  | 

  # Scenario Outline: As a user, I search a non exiting book in my profile
  #   Given I am on the profile page
  #   When I type in the search box a non existing <titleLabel>
  #   Then I should to see No Rows Found message

  #     | titleLabel | message
  #     | asd  | No Rows Found message