/// <reference types="Cypress" />

describe('Validating the automation practise website',function(){

    it('validate the visible and invisible elements',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text')
        .should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text')
        .should('not.be.visible')
        cy.get('#show-textbox').click()

    })
})