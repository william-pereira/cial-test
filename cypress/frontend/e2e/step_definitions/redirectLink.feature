Feature: Redirect Link


Scenario: Redirect after clicking on status codes link
Given I'm in the redirector page
When I click on link redirecting to status codes page
Then I should be redirected to status code page

Scenario Outline: Accessing the status codes page links
Given I'm in the redirector page
When I click on link redirecting to status codes page
And I click on the "<statusCode>" status code link
Then I should be redirected to the "<statusCode>" status code page

Examples:
    | statusCode |
    |   200      |
    |   301      |
    |   404      |
    |   500      |