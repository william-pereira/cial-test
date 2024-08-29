Feature: drag and drop


Scenario: Drag box A and drop to box B
Given I'm in the drag and drop page
When I drag the box A and drop to box B
Then I should see the box B on left side and box A on right side

Scenario: Drag box B and drop to box A
Given I'm in the drag and drop page
When I drag the box B and drop to box A
Then I should see the box A on left side and box B on right side

