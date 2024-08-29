import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from '../../../../support/locators';
const cypressEnv = require('../../../../../cypress.env.json');


const username = cypressEnv.USERNAME;
const password = cypressEnv.PASSWORD;


Given("I'm in the login page", () => {
    cy.log("accessing to the-internet login page")
    cy.visit("/login")
})

When("I type a valid username and password", () => {
    cy.log("typing the user credencials")
    cy.get(loginPage.usernameInput).type(username)
    cy.get(loginPage.passwordInput).type(password, {log: false})

})

When("I type a valid username and an invalid password", () => {
    cy.log("typing the wrong password credencial")
    cy.get(loginPage.usernameInput).type(username)
    cy.get(loginPage.passwordInput).type('123!')

})

When("I type an invalid username and a valid password", () => {
    cy.log("typing the wrong username credencial")
    cy.get(loginPage.usernameInput).type('abc')
    cy.get(loginPage.passwordInput).type(password, {log: false})

})

When("I click on login button", () => {
    cy.log("clicking on login button")
    cy.get(loginPage.loginButton).click()
})

Then("I should be redirected to security page successfully", () => {
    cy.log("validating home page after login")
    cy.get(loginPage.alertMessageToast).should('contain', loginPage.successLoginAlert)
    
})

Then("I should receive an error message about the incorrect password", () => {
    cy.log("receiving the error login message from login page")
    cy.get(loginPage.alertMessageToast).should('contain', loginPage.invalidPasswordAlert)

})

Then("I should receive an error message about the incorrect username", () => {
    cy.log("receiving the error login message from login page")
    cy.get(loginPage.alertMessageToast).should('contain', loginPage.invalidUsernameAlert)

})

