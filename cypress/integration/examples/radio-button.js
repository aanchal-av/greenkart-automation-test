/// <reference types="Cypress" />

describe('Validating the automation practise website',function(){

    it('validate the radio button',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio2"]')
        .check()
        .should('be.checked')
    })
})