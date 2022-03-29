context('testing calculator app with cypress', function (){
    describe('calculator app tests', function (){
        beforeEach(()=>{
            cy.visit("../../index.html");
        })

        it('Should return 9 for 5 + 4', () => {
         
            cy.get("button[value='5']").should('contain','5').click()
            cy.get("button[value='+']").should('contain',"+").click()
            cy.get("button[value='4']").should('contain','4').click()
            cy.get("button[value='=']").should('contain','=').click()
            cy.get(".display").should('have.value','9')
            
        });

        it('Should return 10 for 2 * 5', () => {
         
            cy.get("button[value='2']").should('contain','2').click()
            cy.get("button[value='*']").should('contain',"*").click()
            cy.get("button[value='5']").should('contain','5').click()
            cy.get("button[value='=']").should('contain','=').click()
            cy.get(".display").should('have.value','10')
            
        });

        it('Should return 29 for 3 * 9 + 2', () => {
         
            cy.get("button[value='3']").should('contain','3').click()
            cy.get("button[value='*']").should('contain',"*").click()
            cy.get("button[value='9']").should('contain','9').click()
            cy.get("button[value='+']").should('contain',"+").click()
            cy.get("button[value='2']").should('contain','2').click()
            cy.get("button[value='=']").should('contain','=').click()
            cy.get(".display").should('have.value','29')
            
        });

        it('Should display 156 if 1 then 5 then 6 is selected', () => {
         
            cy.get("button[value='1']").should('contain','1').click()
            cy.get("button[value='5']").should('contain','5').click()
            cy.get("button[value='6']").should('contain','6').click()
            cy.get(".display").should('have.value','156')
            
        });

        it('Should display nothing if 5 then 7 then 3 then C is selected', () => {
         
            cy.get("button[value='5']").should('contain','5').click()
            cy.get("button[value='7']").should('contain','7').click()
            cy.get("button[value='3']").should('contain','3').click()
            cy.get("button[value='C']").should('contain','C').click()
            cy.get(".display").should('have.value','')
            
        });

    })

})