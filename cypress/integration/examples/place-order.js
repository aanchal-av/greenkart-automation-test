/// <reference types="Cypress" />

describe('Validating GreenKart', function(){

it('Place an order',function(){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.get('.product:visible').should('have.length', 4)
    cy.get('.products').find('.product').should('have.length',4)
    cy.get('.products').find('.product').each(($el,index, $list)=>{
    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('Cashews')){
       cy.wrap($el).find('button').click()
    }
    })
    cy.get('.cart-icon > img').click().then(()=>{
    //   cy.contains('PROCEED TO CHECKOUT').click()
    cy.get('.cart-preview > .action-block').contains('PROCEED TO CHECKOUT').click()
    })
       cy.contains('Place Order').click()

})

})