/// <reference types="Cypress" />

describe('Validating the automation practise website',()=>{

    it('validate the web tables',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
         const courseTest= $el.text()
         if(courseTest.includes('WebSecurity Testing for Beginners-QA knowledge to next level')){
            cy.get('tr td:nth-child(2)')
            .eq(index)
            .next().then((price)=>{
                const priceText=price.text()
                expect(priceText).to.equal('20')
            })
         }
        })
})
})