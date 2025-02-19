/// <reference types="Cypress" />

describe('Validating the automation practise website',()=>{

    it('validate the child window',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then((el)=>{
        const newUrl=el.prop('href')
        cy.visit(newUrl)
        cy.origin(newUrl, ()=>{
        cy.get('div.sub-menu-bar a[href*="about"]').click()
        cy.get('.section-title').contains('Welcome to QAClick Academy ')

        })

        })
    
    
    
    
    })
})
