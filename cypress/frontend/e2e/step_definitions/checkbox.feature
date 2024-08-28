Feature: Checkbox

Background: Common step for all scenarios
Given I'm in the checkbox component page


Scenario: Validate all the checkbox component checked
When I check the checkbox 1 and checkbox 2
Then I should see all of the checkboxes checked

Scenario: Validate all the checkbox component without check
When I uncheck all checkboxes of the page
Then I should see all of the checkboxes without check

Scenario: Validate the checkbox 1 component checked
When I check only the checkbox 1
Then I should see only the checkbox 1 checked

Scenario: Validate the checkbox 2 component checked
When I check only the checkbox 2
Then I should see only the checkbox 2 checked