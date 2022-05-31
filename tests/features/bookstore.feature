Scenario Outline: As a logged user, I add a new book to my profile
    Given I am a logged user on the bookstore page
    When I click on a book in the bookstore
    Then I should to see all the book information
    When I click on the Add To Your Collection button
    Then I should to see an alert <message>
    When I go to my profile back
    Then I should to see the book added on my profile

      | message | 
      | Book added to your collection.  | 

Scenario Outline: As a non logged user, I can't add a new book 
    Given I am a non logged user on the bookstore page
    When I click on a book in the bookstore
    Then I should to see all the book information
    And I should not to see Add To Your Collection button visible


  Scenario Outline: As a user, I want to search an exiting book in the bookstore
    Given I am on the bookstore page
    When I type on the search box a existing <titleLabel>
    Then I should to see all the books that match with this text
      | titleLabel | 
      | Learning  | 