class ProductsPage
{
    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }


    goToHomePage() {
        return cy.get('.container > .navbar-brand')
    }


    goToShoppingCartButton()
    {
        return  cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
}
export default ProductsPage;