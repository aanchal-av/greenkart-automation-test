/// <reference types="Cypress" />

describe('Validating the automation practise website',()=>{

    it('validate the child tab',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab')
        .invoke('removeAttr','target')
        .click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.get('#navbarSupportedContent a[href*="about"]').click()
        cy.get('.section-title').contains('Welcome to QAClick Academy ')
        })
})
})