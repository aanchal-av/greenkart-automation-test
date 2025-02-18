/// <reference types="Cypress" />

describe('Validating the automation practise website',()=>{

    it('validate the web tables',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('includes','top')
    })
})