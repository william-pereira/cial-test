Feature: dropdown list


Scenario Outline: Select all the options on dropdown list
Given I'm in the dropdown list page
When I select the "<options>" on dropdown list
Then I should see the "<options>" selected on dropdown list

Examples:
    | options  |
    | Option 1 |
    | Option 2 |




