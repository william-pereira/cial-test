import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { redirectLinkPage } from '../../../../support/locators';


Given("I'm in the redirector page", () => {
    cy.visit('/redirector')
})

When("I click on link redirecting to status codes page", () => {
    cy.get(redirectLinkPage.linkToStatusCodePage).click()

})

Then("I should be redirected to status code page", () => {
    cy.url().should('include', '/status_codes')
    cy.get(redirectLinkPage.statusCodeTitleElement).should('contain', redirectLinkPage.statusCodeTitle)
})

And("I click on the {string} status code link", (statusCode) => {
    cy.get(`a[href="status_codes/${statusCode}"]`).click()
})

Then("I should be redirected to the {string} status code page", (statusCode) => {
    cy.get(redirectLinkPage.statusCodeContent).should('contain', `This page returned a ${statusCode} status code.`)
})