import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { checkboxPage } from '../../../../support/locators';


Given("I'm in the checkbox component page", () => {
    cy.log("accessing to the checkbox component page")
    cy.visit("/checkboxes")
})

When("I check the checkbox 1 and checkbox 2", () => {
    cy.log('verify if the checkbox 1 is already checked')
    cy.get(checkboxPage.checkboxElement).eq(0).then(($checkbox) => {
        if(!$checkbox.is(':checked')) {
            cy.wrap($checkbox).click();
        }
    })
    cy.log('verify if the checkbox 2 is already checked')
    cy.get(checkboxPage.checkboxElement).eq(1).then(($checkbox) => {
        if(!$checkbox.is(':checked')) {
            cy.wrap($checkbox).click();
        }
    })
})

When("I uncheck all checkboxes of the page", () => {
    cy.log('verify if the checkboxes is already unchecked')
    cy.get(checkboxPage.checkboxElement).eq(0).then(($checkbox) => {
        if($checkbox.is(':checked')) {
            cy.wrap($checkbox).click();
        }
    })
    cy.log('verify if the checkbox 2 is already unchecked')
    cy.get(checkboxPage.checkboxElement).eq(1).then(($checkbox) => {
        if($checkbox.is(':checked')) {
            cy.wrap($checkbox).click();
        }
    })
})

When("I check only the checkbox 1", () => {
    cy.log('verify if the checkbox 1 is already checked')
    cy.get(checkboxPage.checkboxElement).eq(0).then(($checkbox) => {
        if(!$checkbox.is(':checked')) {
            cy.wrap($checkbox).click();
        }
    })
    cy.get(checkboxPage.checkboxElement).eq(1).then(($checkbox) => {
        if($checkbox.is(':checked')) {
            cy.wrap($checkbox).click();
        }
    })

})

When("I check only the checkbox 2", () => {
    cy.log('verify if the checkbox 2 is already checked')
    cy.get(checkboxPage.checkboxElement).eq(1).then(($checkbox) => {
        if(!$checkbox.is(':checked')) {
            cy.wrap($checkbox).click();
        }
    })
})

Then("I should see all of the checkboxes checked", () => {
    cy.get(checkboxPage.checkboxElement).eq(0).should('be.checked');
    cy.get(checkboxPage.checkboxElement).eq(1).should('be.checked');
})

Then("I should see all of the checkboxes without check", () => {
    cy.get(checkboxPage.checkboxElement).eq(0).should('not.be.checked');
    cy.get(checkboxPage.checkboxElement).eq(1).should('not.be.checked');
})



Then("I should see only the checkbox 1 checked", () => {
    cy.get(checkboxPage.checkboxElement).eq(0).should('be.checked');
    cy.get(checkboxPage.checkboxElement).eq(1).should('not.be.checked');    
})

Then("I should see only the checkbox 2 checked", () => {
    cy.get(checkboxPage.checkboxElement).eq(1).should('be.checked'); 
    cy.get(checkboxPage.checkboxElement).eq(0).should('not.be.checked');
   
})
