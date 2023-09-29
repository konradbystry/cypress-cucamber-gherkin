Feature: Login app

    Scenario: Success Login
        Given A user opens login page
        When A user enter the username into input
        And A user enter the password into input
        And A user clicks on the login button
        Then A user will be logged in to account