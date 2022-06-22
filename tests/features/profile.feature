Feature: Add books to my profile
#Add a new book to my profile
Scenario Outline: As a logged user, I add a new book to my profile
    Given I am on the login page
    When I login with <userName> and <password>
    Then I should redirect to my profile page
    When I click on the Go To Book Store button
    Then I should redirect to the BookStore page
    When I click on a book in the bookstore
    Then I should see all the book information
    When I click on the Add To Your Collection button
    Then I should see and confirm an alert message
    And I click on the logout button
    Examples:
      | userName | password      |
      | ale      | @Password2021 |

#Add a new book without and account
Scenario Outline: As a non logged user, I add a new book to my profile
    Given I am on the books page
    When I click on a book in the bookstore
    Then I should see all the book information
    Then I should not see Add To Your Collection button
    And I return to the bookstore page

#Delete all the books
  # Scenario Outline: As a user, I want to delete all books from my profile
  #   Given I am a logged user on the profile page
  #   When I click on the delete button
  #   Then I should to see an alert message

#Search a non existing book
  # Scenario Outline: As a user, I search a non exiting book in my profile
  #   Given I am on the profile page
  #   When I type in the search box a non existing <titleLabel>
  #   Then Any book should be shown
  #   Examples:
  #     | titleLabel | 
  #     | asd  | 


      # Scenario Outline: As a user, I logout from profile
  #   Given I am on the login page
  #   When I login with <userName> and <password>
  #   When I click on the logout button
  #   Then I should redirect to the login page

  #   Examples:
  #     | userName | password      |
  #     | ale      | @Password2021 |


  # Scenario Outline: As a user, I want to search an exiting book in my profile
  #   Given I am a logged user on my profile page
  #   When I login with <userName> and <password>
  #   When I click on the logout button
  #   When I type in the search box a existing <titleLabel>
  #   Then I should to see all the books that match with this text
  #     | userName | password      | titleLabel | 
  #     | ale      | @Password2021 |  Git | 