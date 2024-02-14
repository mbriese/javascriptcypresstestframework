/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('perform web page element tests', () => {

    it('will verify the URL of the web page is the expected test page', ()=> {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el) {
            const url=el.prop('href')
            cy.log(url)
            cy.url().should('include', 'AutomationPractice')
            // 'rahulshettyacademy.com/AutomationPractice'
        })
    })

    it.skip('it will test radio buttons', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[for="radio1"] > .radioButton').click()
        cy.get('[for="radio1"] > .radioButton').should('be.checked')

        // check radio button2
        cy.get('[for="radio2"] > .radioButton').click()
        cy.get('[for="radio2"] > .radioButton').should('be.checked')

        // check radio button3
        cy.get('[for="radio3"] > .radioButton').click()
        cy.get('[for="radio3"] > .radioButton').should('be.checked')
    })

    it.skip('it will test checkboxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption3').check().should('be.checked')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked')
    })

    it.skip('will test autocomplete selection United States from country list', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#autocomplete').type('United')
        cy.get('.ui-menu-item div').each(($el, index, list) => {
            if ($el.text() === "United States (USA)")
                cy.wrap($el).click()
        })
        cy.get('#autocomplete').should('have.value', 'United States (USA)')
    })

    it.skip('will test visible/invisible text box and text fill in', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        cy.get('#displayed-text').type('text string')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('have.value', 'text string')
    })

    it.skip('will test alert boxes with messages from Alert and Confirm buttons', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#alertbtn').click()
        // verify in logs that alert message appears
        cy.on('window:alert', (str) => {
                expect(str).to.equal('Hello , share this practice page and share your knowledge')
            }
        )
        cy.get('#confirmbtn').click()
        // verify in logs that confirm message appears Are you sure you want to confirm?
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })

    it.skip('will test alert boxes with name text and messages from Alert and Confirm buttons', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#name').type('name')
        cy.get('#alertbtn').click()
        // verify in logs that alert message appears
        cy.on('window:alert', (str) => {
                expect(str).to.equal('Hello name, share this practice page and share your knowledge')
            }
        )
        cy.get('#name').type('name')
        cy.get('#confirmbtn').click()
        // verify in logs that confirm message appears Are you sure you want to confirm?
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello name, Are you sure you want to confirm?')
        })
    })
    it.skip('will test handling child windows', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.origin("https://www.qaclickacademy.com", () => {
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get(".mt-50 h2").should('contain', 'QAClick Academy')

        })
    })

    it.skip('will iterate through a course table to find course and verify the price in col 3', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes("Python")) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })

    it.skip('will test mouse hover events to verify expected behavior-Top', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })

    it.skip('will test mouse hover events to verify expected behavior-Top', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include', 'top')
    })

    it.skip('will test mouse hover events to verify expected behavior-Reload', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Reload').click()
        cy.url().should('include', 'AutomationPractice')
    })

    it.skip('will handle testing Frames in this test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.frameLoaded('#courses-iframe').as('myframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(100)
       // cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    })

})

