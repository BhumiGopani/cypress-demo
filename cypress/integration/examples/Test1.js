/// <reference types="Cypress" />

describe('My First Test Suite', function () {

    it('Visit Web page, deal with text box, alais, remove invisible item, deal with array', function () {

        // get url
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // get element and add text to it
        cy.get(".search-keyword").type("ca")
        // wait for serach results to give 
        cy.wait(2000)
        // to get only visible elements on the page
        cy.get(".product:visible").should("have.length", 4)
        // defining alias
        cy.get(".products").as("productLocator")
        // verify only 4 elements on the page
        cy.get("@productLocator").find(".product").should("have.length", 4)
        // click on 3rd item in the array of element
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click()
        // loop the array and find particular text
        cy.get("@productLocator").find(".product").each(($el, index, $list) => {
            const vegText = $el.find("h4.product-name").text()
            if (vegText.includes("Cashews")) {
                cy.get($e1).find("button").click()
            }
        })
        // control the promise if you want to handle it with element
        cy.get(".brand").then(function(logoelement)
        {
            cy.log(logoelement.text())
        }
        )
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
        
        //this is to print in logs
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        
        })
    }
    )
}
)