Feature: Tile menu

    Background:
        Given Logged user is on account page
    Scenario: User can open the Edit Account Details page
        When A user cliks on Edit Account Details tile
        Then The Edit Account Details page is opened to the user
    Scenario: User can open the Change Password page
        When A user cliks on Change Password tile
        Then The Change Password page is opened to the user
    Scenario: User can open the Manage Address Book page
        When A user cliks on Manage Address Book tile
        Then The Manage Address Book page is opened to the user
    Scenario: User can open the Wishlist page
        When A user cliks on Wishlist tile
        Then The Wishlist page is opened to the user
    Scenario: User can open the Order History page
        When A user cliks on Order History tile
        Then The Order History page is opened to the user
    Scenario: User can open the Transaction History page
        When A user cliks on Transaction History tile
        Then The Transaction History page is opened to the user
    Scenario: User can open the Downloads page
        When A user cliks on Downloads tile
        Then The Downloads page is opened to the user
    Scenario: User can open the Notifications page
        When A user cliks on Notifications tile
        Then The Notifications page is opened to the user
    Scenario: User can logoff with tile menu
        When A user cliks on Logoff tile
        Then The Logoff page is opened to the user
        And A message with text "You have been logged off your account." is displayed