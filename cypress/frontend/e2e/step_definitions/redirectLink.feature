Feature: Redirect Link


Scenario: Redirect after clicking on status codes link
Given I'm in the redirector page
When I click on link redirecting to status codes page
Then A should be redirected to status code page
