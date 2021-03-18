/// <reference types="Cypress" />

describe('My Third Test Suite', function () {

    it('Deal with popups, alert text, child tabs, browser navigation, tables, mouse-hover', function () {

        // get url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // alert button, it automatically says ok to it
        cy.get("[value='Alert']").click()
        // confirm button
        cy.get("[value='Confirm']").click()
        // Cypress auto accepts alerts and popups
        // Cypress has capabilty to listen to browser events
        // window:alert is triggered at the time of alert
        cy.on("window:alert", (str) =>
        {
            //Mocha
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        cy.on("window:confirm", (str) =>
        {
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

        // Cypress have ability to manipulate the dom, and opens child window on same page
        cy.get("#opentab").invoke("removeAttr", "target").click()
        cy.url().should("include", "https://www.rahulshettyacademy.com/#/index")

        // browser navigation
        cy.go("back")

        // tables
        cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
            const text = $e1.text()
            if(text.includes("Python")){
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal("25")
                }
                )
            }
        })

        // mouse hover
        cy.get("div.mouse-hover-content").invoke("show")
        cy.contains("Top").click()
        cy.url().should("include", "top")

        // Force click
        cy.contains("Top").click({ force: true })



    })
}
)