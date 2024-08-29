Feature: Upload file


Scenario: Upload file with success using the file upload input
Given I'm in the upload file page
When I select an image clicking on the file upload input
And I click on the upload button
Then I should see the image name and a title 'File Uploaded!' on the page


Scenario: Upload file with error using the drag and drop upload
Given I'm in the upload file page
When I drag and drop an image on the drag and drop file input
And I click on the upload button
Then I should see the message 'Internal Server Error'


Scenario: Click on upload button without uploading any file
Given I'm in the upload file page
When I click on the upload button without uploading any file
Then I should see the message 'Internal Server Error'