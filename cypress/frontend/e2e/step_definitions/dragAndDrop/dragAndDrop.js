import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
const dataTransfer = new DataTransfer();


Given("I'm in the drag an drop page", () => {
    
    cy.visit("/drag_and_drop")
})

When("I drag the box A and drop to box B", () => {
    cy.get('#column-a')
      .trigger('dragstart', { dataTransfer })
      .get('#column-b')
      .trigger('dragenter', { dataTransfer })
      .trigger('dragover', { dataTransfer })
      .trigger('drop', { dataTransfer })
      .get('#column-a')
      .trigger('dragend', { dataTransfer });
         
  });

When("I drag the box B and drop to box A", () => {
    cy.get('#column-b')
      .trigger('dragstart', { dataTransfer })
      .get('#column-a')
      .trigger('dragenter', { dataTransfer })
      .trigger('dragover', { dataTransfer })
      .trigger('drop', { dataTransfer })
      .get('#column-b')
      .trigger('dragend', { dataTransfer });
         
  });  

Then("I should see the box B on left side and box A on right side", () => {
    cy.get('#column-a').should('contain', 'B');
    cy.get('#column-b').should('contain', 'A');

})


Then("I should see the box A on left side and box B on right side", () => {
    cy.get('#column-b').should('contain', 'A');
    cy.get('#column-a').should('contain', 'B');

})