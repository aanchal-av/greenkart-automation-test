/// <reference types="Cypress" />

describe('Validating the automation practise website',function(){

it('select the static dropdown',function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('select')
    .select('option2')
    .should('have.value','option2')
})


})