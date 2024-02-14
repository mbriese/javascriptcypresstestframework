/// <reference types="Cypress" />

import HomePage from "../../PageObjects/HomePage";
import ProductsPage from "../../PageObjects/ProductsPage";
import CartPage from "../../PageObjects/CartPage";
import CheckoutPage from "../../PageObjects/CheckoutPage";

describe('these tests will demonstrate cypress framework concepts on an angular shopping page', () => {

    before(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })

    it.skip('it will demonstrate PAGE OBJECTS USAGE in tests', () => {
        const homePage = new HomePage();
        cy.visit(Cypress.env('url')+'/angularpractice/')
       // cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(globalThis.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', 2)
        homePage.getTwoWayDataBinding().should('have.value', globalThis.data.name)

        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()
    })

    it('it will demonstrate shopping with PAGE OBJECTS USAGE in tests', () => {

        const homePage = new HomePage();
        const productsPage = new ProductsPage();
        const cartPage = new CartPage();
        const checkoutPage = new CheckoutPage();

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getShopTab().click()

        globalThis.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })
        productsPage.goToShoppingCartButton().click()
        cartPage.getCheckoutButton().click()

        checkoutPage.getCountry().type('United States of America')
        Cypress.config("defaultCommandTimeout", 8000);
        cy.get('.suggestions > ul > li > a').click()
        checkoutPage.getCheckoutbox().click({force:true})
        checkoutPage.getPurchaseButton().click()
        checkoutPage.getSuccessConfirmationMessage().should('contain.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        checkoutPage.getSuccessConfirmationMessage().then(function(element) {
            const actualText=element.text()
            expect(actualText.includes("Success!")).to.be.true
        })
    })

    it.skip('it will check properties of a disabled radio button', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('#inlineRadio3').should('be.disabled')
    })

    it.skip('will test tech shopping option from this page', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()
        // get shopping elements and then find match + add to cart//
        cy.selectProduct('Blackberry')
    })

    it.skip('will iterate over a list of products in an array to be added to the cart',()=> {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()
        globalThis.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })
    })

})