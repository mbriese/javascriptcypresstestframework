describe('gather visible and invisible CA products', () => {
    beforeEach(function () {
        cy.visit(Cypress.env('url')+'/seleniumPractise/#/')
    })

    it('gather both visible and invisible CA products 5', () => {
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)
    })

    it.skip('intentionally failing assert to show retries on products page CA products 4', () => {
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 4)
    })

    it('gather only visible CA products 4', () => {
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
    })

    it('gather only 4 products because we used parent child relationship', () => {
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.products').find('.product').should('have.length', 4)
    })

    it('add the 2nd element to the cart', () => {
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.get('.product').should('have.length', 5)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    })

    it('will iterate over array of elements & find correct element', () => {
        cy.get('.search-keyword').type('ca')

        cy.get('.products').find('.product')
            .each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            cy.log(textVeg)
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
            else {
                cy.log(index)
                cy.log(textVeg)
            }
        })
    })

    it('find the logo and print the text', () => {
            cy.get('.brand').then(function (logoelement) {
                cy.log(logoelement.text())
            })
        })

    it('add cashews to the cart', ()=> {
        cy.get('.search-keyword').type('ca')

        cy.get('.products').find('.product')
            .each(($el, index, $list) => {

                const textVeg = $el.find('h4.product-name').text()
                cy.log(textVeg)
                if (textVeg.includes('Cashews')) {
                    cy.wrap($el).find('button').click()
                    cy.get('.cart-icon > img').click()
                    cy.contains('PROCEED TO CHECKOUT').click()
                    cy.contains('Place Order').click()
                   // cy.get('.chkAgree').click()
                } else {
                    cy.log(index)
                    cy.log(textVeg)
                }
            })
    })
})