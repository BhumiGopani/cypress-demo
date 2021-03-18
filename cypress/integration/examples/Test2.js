/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('Deal with checkbox, static dropdown, dynamic dropdown, vcheck visibilty of element and radio button', function () {

        // get url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // click on checkbox
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1")
        // or use click
        // cy.get("#checkBoxOption1").click().should("be.checked")
        // or use by value
        // cy.get("#checkBoxOption1").click().should("be.checked")
        // check the checkbox by value
        // cy.get("#checkBoxOption1").check("option1").should("be.checked")
        // check the checkbox by making sure it is disbaled
        // cy.get('#checkBoxOption1"]').not('[disabled]').check().should('be.checked')
        // Click on all three
        cy.get("input[type='checkbox']").check(["option2", "option3"]).should('be.checked')
        // uncheck the checkbox
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")

        // deal with static dropbox using value attribute
        cy.get("select").select("option2").should("have.value", "option2")

        // deal with dynamic dropdown
        cy.get("#autocomplete").type("ind")
        cy.get(".ui-menu-item div").each(($e1, index, $list) => {
            if ($e1.text()==="India") {
                cy.get($e1).click()
            }
        })
        cy.get("#autocomplete").should("have.value", "India")

        // check visibilty of element
        cy.get("#displayed-text").should("be.visible")
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")

        // deal with radio button
        cy.get("[value='radio2']").check().should("be.checked")
    })
}
)