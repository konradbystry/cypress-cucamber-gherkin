Feature: Login app

    Background:
        Given A user opens login page
    Scenario: Success Login
        When A user enter correct username into input
        And A user enter correct password into input
        And A user clicks on the login button
        Then A user will be logged in to account
    Scenario: Incorrect Username Login
        When A user enter incorrect username into input
        And A user enter correct password into input
        And A user clicks on the login button
        Then The error message "Error: Incorrect login or password provided." is displayed
    Scenario: Incorrect Password Login
        When A user enter correct username into input
        And A user enter incorrect password into input
        And A user clicks on the login button
        Then The error message "Error: Incorrect login or password provided." is displayed