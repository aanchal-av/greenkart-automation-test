/// <reference types="Cypress" />

describe('My first test suite', function(){

    it('My first test case', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
    })

})