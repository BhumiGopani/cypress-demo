/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe'

describe('My Fourth Test Suite', function () {

    it('Deal with child window', function () {

        // get url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // child window
        cy.get("#opentab").then(function(e1)
        {
            const url = e1.prop("href")
            // it should be under same domain
            cy.visit(url)
        })

        // iframes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2)
    })
})