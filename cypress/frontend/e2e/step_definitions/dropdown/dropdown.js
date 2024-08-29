import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


Given("I'm in the dropdown list page", () => {
    cy.visit("/dropdown")
})

When("I select the {string} on dropdown list", (options) => {

    cy.log('selecting an option on select')
    cy.get("#dropdown").select(options)

})

Then("I should see the {string} selected on dropdown list", (options) =>{

    cy.log('validating the option selected')
    cy.get('#dropdown').should('contain', options)
})