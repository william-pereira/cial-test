Feature: Login

Background: Common step for all scenarios
Given I'm in the login page


Scenario: Validate login successfully
When I type a valid username and password
And I click on login button
Then I should be redirected to security page successfully

Scenario: Validate login with invalid password
When I type a valid username and an invalid password
And I click on login button
Then I should receive an error message about the incorrect password

Scenario: Validate login with invalid username
When I type an invalid username and a valid password
And I click on login button
Then I should receive an error message about the incorrect username