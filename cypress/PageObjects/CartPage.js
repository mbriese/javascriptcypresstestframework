class CartPage
{
    getContinueShoppingButton() {
        return cy.get(':nth-child(3) > :nth-child(5) > .btn')
    }


    getCheckoutButton() {
       return cy.get(':nth-child(4) > :nth-child(5)')

    }

}
export default CartPage;