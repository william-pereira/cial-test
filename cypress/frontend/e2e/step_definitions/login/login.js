import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
const cypressEnv = require('../../../../../cypress.env.json');


const username = cypressEnv.USERNAME;
const password = cypressEnv.PASSWORD;


Given("I'm in the login page", () => {
    cy.log("accessing to the-internet login page")
    cy.visit("/login")
})

When("I type a valid username and password", () => {
    cy.log("typing the user credencials")
    cy.get("#username").type(username)
    cy.get("#password").type(password, {log: false})

})

When("I type a valid username and an invalid password", () => {
    cy.log("typing the wrong password credencial")
    cy.get("#username").type(username)
    cy.get("#password").type('123!')

})

When("I type an invalid username and a valid password", () => {
    cy.log("typing the wrong username credencial")
    cy.get("#username").type('abc')
    cy.get("#password").type(password, {log: false})

})

When("I click on login button", () => {
    cy.log("clicking on login button")
    cy.get("#login > button").click()
})

Then("I should be redirected to security page successfully", () => {
    cy.log("validating home page after login")
    cy.get("#flash").should('contain', ' You logged into a secure area!')
    
})

Then("I should receive an error message about the incorrect password", () => {
    cy.log("receiving the error login message from login page")
    cy.get("#flash").should('contain', 'Your password is invalid!')

})

Then("I should receive an error message about the incorrect username", () => {
    cy.log("receiving the error login message from login page")
    cy.get("#flash").should('contain', 'Your username is invalid!')

})

