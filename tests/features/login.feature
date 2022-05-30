Feature: Login into bookstore

  Scenario Outline: As a user, I can log into the bookstore
    Given I am on the login page
    When I login with <userName> and <password>
    Then I should redirect to my profile page

    Examples:
      | userName | password      |
      | ale      | @Password2021 |

  Scenario Outline: As a user, I log with a wrong password
    Given I am on the login page
    When I login with a correct <userName> and an incorrect <password>
    Then I should see a <message>

    Examples:
      | userName    | password      | message
      | ale  | pass| Invalid username or password!
      

