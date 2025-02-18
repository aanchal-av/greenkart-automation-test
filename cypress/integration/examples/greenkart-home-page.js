/// <reference types="Cypress" />

describe('Validating GreenKart', function(){

    it('My first test case', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el,index, $list)=>{
        const textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
           cy.wrap($el).find('button').click()
        }
        })
    })

    it('using alias and validating the texts', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
    
    })

    it('asserting the brand logo', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.brand').then(function(logoElement){
        cy.log(logoElement.text())
        })
    })
   
    


})