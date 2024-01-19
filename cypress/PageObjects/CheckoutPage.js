class CheckoutPage
{
    getCountry() {
        return cy.get('#country')
    }


    getCheckoutbox() {
       return cy.get('#checkbox2')

    }

    getPurchaseButton() {
        return cy.get('.ng-untouched > .btn')
    }

    getSuccessConfirmationMessage() {
        return cy.get('.alert')
    }
}
export default CheckoutPage;