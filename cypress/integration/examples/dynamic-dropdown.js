/// <reference types="Cypress" />

describe('Validating the automation practise website',function(){

it('select the dynamic dropdown',function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#autocomplete').type('Ind')
    cy.get('.ui-menu-item  div')
    .each(($el, index, $list)=>{
        if($el.text()==="India"){
            $el.click()
        }
    })
    
   cy.get('#autocomplete')
   .should('have.value','India')
})


})