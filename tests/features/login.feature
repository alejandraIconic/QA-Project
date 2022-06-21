Feature: Login into bookstore
#Login with an incorrect password
    Scenario Outline: As a user, I log with a wrong password
    Given I am on the login page
    When I login with a correct <userName> and an incorrect <password>
    Then I should see a message

    Examples:
      | userName | password |
      | ale  | pass |

#Login with an incorrect user and password
    Scenario Outline: As a user, I log with a wrong account and password
    Given I am on the login page
    When I login with a incorrect <userName> and an incorrect <password>
    Then I should see a message

    Examples:
      | userName | password |
      | badUser  | pass |

 #Login with an correct credentials   
    Scenario Outline: As a user, I can log into the bookstore
    Given I am on the login page
    When I login with <userName> and <password>
    Then I should redirect to my profile page

    Examples:
      | userName | password      |
      | ale      | @Password2021 |

      
    # Scenario Outline: As a user, I register with a new account
    # Given I am on the login page
    # When I click on the New User button
    # Then I should redirect to the register page
    # When I fill correctly the information: <firstname>, <lastname>, <userName>, <password>
    # Then I should redirect to my profile page

    # Examples: 
    # | firstname | lastname | userName | password |
    # | alejandra | rodriguez | alerod1 | @Password2021 |

