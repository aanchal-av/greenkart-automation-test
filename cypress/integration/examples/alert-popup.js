/// <reference types="Cypress" />

describe('Validating the automation practise website',function(){

    it('validate the alerts and popups',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn')
        .click()
        cy.get('input[value="Confirm"]')
        .click()
        cy.on('window:alert',(str)=> {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=> {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
})
})