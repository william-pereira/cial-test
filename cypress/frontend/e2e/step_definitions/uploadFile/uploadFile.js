import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { uploadFilePage } from '../../../../support/locators';

const filePath = 'images/cial_logo.jpeg'
const fileName = filePath.split('/').pop();
const dataTransfer = new DataTransfer();


Given("I'm in the upload file page", () => {
    cy.log("accessing to the-internet upload file page")
    cy.visit("/upload")
})


When("I select an image clicking on the file upload input", () => {
    cy.log("selecting and uploading an image to upload input")
    cy.get(uploadFilePage.fileUploadInput).attachFile(filePath)
})

And("I click on the upload button", () => {
    cy.log('clicking on the upload button')
    cy.get(uploadFilePage.fileUploadSubmit).click()

})

When("I click on the upload button without uploading any file", () => {
    cy.log('clicking on upload button without uploading any file')
    cy.get(uploadFilePage.fileUploadSubmit).click()
})

Then("I should see the image name and a title 'File Uploaded!' on the page", () => {
    cy.log('validating the image uploaded')
    cy.get(uploadFilePage.UploadedTitleElement).contains(uploadFilePage.UploadedTitle)
    cy.get(uploadFilePage.uploadedFileName).should('contain', fileName)
})

When("I drag and drop an image on the drag and drop file input", () => {
    cy.get(uploadFilePage.drangAndDropUpload).then(dropzone => {
    cy.log('creating a DataTransfer event to simulate drag and drop')
  
    cy.log('add the file to dataTransfer Event')
    cy.fixture(filePath, 'base64').then(fileContent => {
        const file = new File([Cypress.Blob.base64StringToBlob(fileContent)], filePath, { type: 'image/jpeg' });
        dataTransfer.items.add(file);

        cy.log('events to drag and drop')
        cy.wrap(dropzone)
        .trigger('dragstart', { dataTransfer })
        .trigger('dragenter', { dataTransfer })
        .trigger('dragover', { dataTransfer })
        .trigger('drop', { dataTransfer });
    });
    });

})

Then("I should see the message 'Internal Server Error'", () => {
    cy.log('validating the service call error')
    cy.get(uploadFilePage.uploadFileErrorTitle).should('contain', uploadFilePage.uploadFileErrorMessage)
})