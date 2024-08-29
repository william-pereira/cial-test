import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { dragAndDropPage } from  '../../../../support/locators';
const dataTransfer = new DataTransfer();


Given("I'm in the drag and drop page", () => {
    
    cy.visit("/drag_and_drop")
})

When("I drag the box A and drop to box B", () => {
    cy.log('event to mouse click on box and drop in other box')
    cy.get(dragAndDropPage.boxAElement)
      .trigger('dragstart', { dataTransfer })
      .get(dragAndDropPage.boxBElement)
      .trigger('dragenter', { dataTransfer })
      .trigger('dragover', { dataTransfer })
      .trigger('drop', { dataTransfer })
      .get(dragAndDropPage.boxAElement)
      .trigger('dragend', { dataTransfer });
         
  });

When("I drag the box B and drop to box A", () => {
    cy.log('event to mouse click on box and drop in other box')
    cy.get(dragAndDropPage.boxBElement)
      .trigger('dragstart', { dataTransfer })
      .get(dragAndDropPage.boxAElement)
      .trigger('dragenter', { dataTransfer })
      .trigger('dragover', { dataTransfer })
      .trigger('drop', { dataTransfer })
      .get(dragAndDropPage.boxBElement)
      .trigger('dragend', { dataTransfer });
         
  });  

Then("I should see the box B on left side and box A on right side", () => {
    cy.log('validating the columns on A and B side')
    cy.get(dragAndDropPage.boxAElement).should('contain', dragAndDropPage.bLetter);
    cy.get(dragAndDropPage.boxBElement).should('contain', dragAndDropPage.aLetter);

})


Then("I should see the box A on left side and box B on right side", () => {
    cy.get(dragAndDropPage.boxBElement).should('contain', dragAndDropPage.aLetter);
    cy.get(dragAndDropPage.boxAElement).should('contain', dragAndDropPage.bLetter);

})