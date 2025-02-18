/// <reference types="Cypress" />

describe('Validating the automation practise website',function(){
    it('Check the checkboxes',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1')
        .check()
        .should('be.checked')
        .and('have.value','option1')
    
    })

    it('Uncheck the checkboxes',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1')
        .uncheck()
        .should('not.be.checked')
    
    })

    it('Select all checkboxes',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]')
        .check()
    })

    it('Select specific checkboxes',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]')
        .check('option1','option2')
    })
})