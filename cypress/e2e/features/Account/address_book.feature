Feature: Address book

    Background:
        Given User is logged
    Scenario: User can add new address
        Given User is on the Manage Address Book page
        When A user clicks on New Address button
        And A user fills New Address form
        And A user clicks on Contiune button
        Then Address Book page is opened to user
        And Success message "Your address has been successfully inserted" is displayed
        And New address is visible in Address book

    Scenario: User can delete address
        Given A user added new address
        When A user clicks on Delete button
        Then Success message "Your address has been successfully deleted" is displayed

    Scenario: User can edit address
        Given User is on the Manage Address Book page
        When A user clicks on Edit button
        And A user clears Company input
        And A user types new company name into Company input
        And A user clicks on Contiune button
        Then Success message "Your address has been successfully updated" is displayed
        And Eddited address is visible in Address Book