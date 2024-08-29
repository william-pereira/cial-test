import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


Given("I'm in the redirector page", () => {
    cy.visit('/redirector')
})

When("I click on link redirecting to status codes page", () => {
    cy.get('#redirect').click()

})

Then("A should be redirected to status code page", () => {
    cy.url().should('include', '/status_codes')
    cy.get('div > h3').should('contain', 'Status Codes')
})