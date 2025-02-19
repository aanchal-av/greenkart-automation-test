/// <reference types="Cypress" />

describe('Validating GreenKart', function(){

    it('Validate the calendar', function(){
        const date= '7'
        const month= '12'
        const year= '2027'
        const expectedList= [month,date,year]
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__calendar-button ').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.contains("button",year).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(month-1)).click()
        cy.contains("abbr",date).click()
        cy.get('.react-date-picker__inputGroup__input').each(($el, index)=>
            {
           cy.wrap($el).invoke('val').should('eq',expectedList[index])
             
           })
           
        })

    
    })
